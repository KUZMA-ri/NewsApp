import { Link } from "react-router-dom";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import classNames from 'classnames';
import axios from "axios";

import { GET_NEWS_SUCCESS } from "../../redux/news/actions";

import {fetchNews} from '../../services/news';

import Search from "../search/Search";
import Loader from '../loader/Loader';

import { dateNow } from "../../constants/constants";
import { timeNow } from "../../constants/constants";

import styles from './news.module.css';
// ----------------------------------------------------------------------------------------------------------------------------------------------

const API_KEY = 'pub_134488cb6dbb49732c32b30c33864255c0ece';
const API = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en`;

const NewsList = () => {
// -----------------------------------------------------------------------------
    // const [data, setData] = useState([]);                // загрузка при скролле (данные)
    // const [currentPage, setCurrentPage] = useState(0);
    // const [fetching, setFetching] = useState(true);
    // const [totalPages, setTotalPages] = useState(1);
// -----------------------------------------------------------------------------------------------------------
    // useEffect(() => {                                    // загрузка при скролле (запрос)
    //     if(fetching && currentPage < totalPages) {
    //         let newCurrentPage = currentPage + 1;
    //         setCurrentPage(newCurrentPage);

    //         axios.get(`${API}&page=${newCurrentPage}`)
    //             .then((response) => {
    //                 const totalPagesResult = response.data.totalResults / 10;
    //                 console.log(totalPagesResult);
    //                 setData([...data, ...response.data.results]);
    //                 setTotalPages(totalPagesResult);
    //             })
    //             .finally(() => {
    //                 setFetching(false);
    //             })
    //     }
    // }, [fetching]);

    // useEffect(() => {
    //     document.addEventListener('scroll', scrollHandler);

    // return function() {
    //     document.removeEventListener('scroll', scrollHandler);
    // }
    // }, []);

    // const scrollHandler = (e) => {
    //     if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
    //         setFetching(true);
    //     }
    // }
// ---------------------------------------------------------------------------------------------------------------------------------

    // -------------------------------------------------------------

    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);
    const search = useSelector(state => state.search.search);
    const category = useSelector(state => state.news.category);
    // const fetching = useSelector(state => state.news.fetching);              // для загрузки при скролле на redux
    // const currentPage = useSelector(state => state.news.currentPage);        // -//-//-
    // const totalPages = useSelector(state => state.news.totalPages);          // -//-//-

    useEffect(() => {
        if(category) {
            axios.get(`${API}&category=${category}`)
            .then((response) => {
                const news = response.data.results;
            dispatch(GET_NEWS_SUCCESS(news));
            })
        } else {
            dispatch(fetchNews())
        }
        
    },[category]);

    const theme = useSelector((state) => state.theme.theme);            // theme (day/night)
    const mainClass = classNames(styles.main, {     
        [styles.main_night]: theme === 'dark',     
    });
    const dateClass = classNames(styles.date, {
        [styles.date_night]: theme === 'dark', 
    })
    const newsContainerClass = classNames(styles.news__container, {
        [styles.news__container_night]: theme === 'dark', 
    })
    const titleClass = classNames(styles.news__title, {
        [styles.news__title_night]: theme === 'dark', 
    })
    
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

    const items = (search ? search : news).map((news, index) => (      // :news || :data
        <div className={newsContainerClass} key={index}>
                <div className={styles.news__containerImage}>
                    <img 
                        className={styles.news__img}
                        src={news.image_url 
                        ? news.image_url 
                        : 'https://images.unsplash.com/photo-1584824388173-4df14ba64472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fG5vdCUyMGZvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'} 
                    />
                </div>
                <div className={styles.news__categories}>
                    {news.category.map((item) => (
                        <p key={item} className={styles.news__categoriesName}>{item}</p>
                    ))}
                </div>
                <div className={styles.news__content}>
                <Link className={styles.news__link}  to={`/NewsApp/news/${news.title}`}>
                    <h2 className={titleClass}>{news.title}</h2>
                </Link>
                </div>
                <span className={styles.news__pubdate}>Published: {news.pubDate}</span>    
        </div>
    ));

    if(!news && !search) {
        return <Loader />
    }

    return(
        <div className={mainClass}>
            <div className={styles.search__wrapper}>
                <div className={dateClass}>{dateNow}</div>
                {/* search news={news} || news={data}*/}
                <Search news={news}/> 
                <div className={dateClass}>{timeNow}</div>
            </div>
            <div className={styles.news}>
                {items}
            </div>
        </div>
    )
}

export default NewsList;