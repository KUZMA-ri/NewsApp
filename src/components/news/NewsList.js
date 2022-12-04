import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {fetchNews} from '../../services/news';
import axios from "axios";
import Search from "../search/Search";

const API_KEY = 'pub_134488cb6dbb49732c32b30c33864255c0ece';
const API = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en`;

const NewsList = () => {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [fetching, setFetching] = useState(true);
    const [totalPages, setTotalPages] = useState(1);

    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);
    const search = useSelector(state => state.search.search);
    // const fetching = useSelector(state => state.news.fetching);
    // const currentPage = useSelector(state => state.news.currentPage);
    // const totalPages = useSelector(state => state.news.totalPages);

    useEffect(() => {
        dispatch(fetchNews())
    },[]);

    // -------------------------------------------------------------
    useEffect(() => {
        if(fetching && currentPage < totalPages) {
            let newCurrentPage = currentPage + 1;
            setCurrentPage(newCurrentPage);

            axios.get(`${API}&page=${newCurrentPage}`)
                .then((response) => {
                    const totalPagesResult = response.data.totalResults / 10;
                    console.log(totalPagesResult);
                    setData([...data, ...response.data.results]);
                    setTotalPages(totalPagesResult);
                })
                .finally(() => {
                    setFetching(false);
                })
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

    return function() {
        document.removeEventListener('scroll', scrollHandler);
    }
    }, []);

    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 600) {
            setFetching(true);
        }
    }

    // -------------------------------------------------------------
    // useEffect(() => {
    //     if(fetching && currentPage < totalPages) {       
    //         // dispatch(GET_MORE_NEWS(news))
    //         axios.get(`${API}&page=${currentPage}`) 
    //             .then((response) => {
    //                 // let newTotalPages = response.data.totalResults / 10;
    //                 // dispatch(GET_MORE_NEWS({totalPages: newTotalPages}));      //1784
    //                 dispatch(GET_MORE_NEWS({news:[...news, ...response.data.results]}));
    //             })
    //             .finally(() => {
    //                 dispatch(GET_MORE_NEWS({fetching: false}))
    //             })
    //     }
    // }, [fetching]);

    // useEffect(() => {
    //     document.addEventListener('scroll', scrollHandler)

    //     return function () {
    //         document.removeEventListener('scroll', scrollHandler)
    //     }
    // },[])

    // const scrollHandler = (e) => {
    //     if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)  < 600) {
    //         dispatch(GET_MORE_NEWS({fetching: true}));
    //     }
    // }
    // -------------------------------------------------------------
    
    const items = (search ? search : data).map((news, index) => (      // при первом рабочем варианте :news поменять на :data
        <Link key={index} to={`news/${news.title}`}>
            <img src={news.image_url ? news.image_url : 'https://www.easyredir.com/images/blog/error-404-not-found.c106c575e85509b926855247b4b7f50514f0297d2c350ecee9bc93f04914f9d3.jpg'} />
            <h2 >{news.title}</h2>
            <div >{news.description}</div>
            <span >Published: {news.pubDate}</span>
        </Link>
    ));

    return(
        <div>
            <Search news={news}/> 
            {items}
        </div>
    )
}

export default NewsList;