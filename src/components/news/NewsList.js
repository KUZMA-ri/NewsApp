import { Link } from "react-router-dom";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import classNames from 'classnames';
import axios from "axios";

import ScrollToTop from "react-scroll-to-top";
import Pagination from '@mui/material/Pagination';

import { GET_NEWS_SUCCESS, GET_TOTAL_PAGES, GET_CURRENT_PAGE } from "../../redux/news/actions";

import { dateNow } from "../../constants";
import { timeNow } from "../../constants";

import Search from "../search";
import Loader from '../loader';

import styles from './news.module.css';
// ----------------------------------------------------------------------------------------------------------------------------------------------

const API_KEY = 'pub_134488cb6dbb49732c32b30c33864255c0ece';     
// const API_KEY = 'pub_14659f00acb3b613b42577e22f0abf510730b';        // #2
const API = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en`;

const NewsList = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);
    const search = useSelector(state => state.search.search);
    const category = useSelector(state => state.news.category);
    const currentPage = useSelector(state => state.news.currentPage);       
    const totalPages = useSelector(state => state.news.totalPages); 

    useEffect(() => {
        if(category) {
            axios.get(`${API}&page=${currentPage}&category=${category}`)
            .then((response) => {
                const news = response.data.results;
                const totalPages = response.data.totalResults;
            dispatch(GET_NEWS_SUCCESS(news));
            dispatch (GET_TOTAL_PAGES(totalPages));
            })
        } else {
            axios.get(`${API}&page=${currentPage}`)
                .then((response) => {
                    const news = response.data.results;
                    const totalPages = response.data.totalResults;
                    dispatch(GET_NEWS_SUCCESS(news));
                    dispatch (GET_TOTAL_PAGES(totalPages));
                })
        }
    },[category, currentPage, totalPages]);
    

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

    const paginationContainerClass = classNames(styles.pagination__container, {     
        [styles.pagination__container_night]: theme === 'dark',     
    });

    const items = (search ? search : news).map((news, index) => (     
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
                <Search news={news}/> 
                <div className={dateClass}>{timeNow}</div>
            </div>
            <div className={styles.news}>
                {items}
            </div>
            <div className={paginationContainerClass}>
                <Pagination
                    className={styles.pagination}
                    count={totalPages - 1} 
                    page={currentPage}
                    color="primary"
                    onChange={(_, num) => dispatch(GET_CURRENT_PAGE(num))}/>
            </div>
            <ScrollToTop smooth className={styles.scrollToTop}/>
        </div>
    )
}

export default NewsList;