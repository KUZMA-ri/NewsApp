import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ADD_NEWS_TO_FAVOURITE } from '../../redux/news/actions';

import Swal from "sweetalert2";
import classNames from 'classnames';
import axios from 'axios';

import Loader from "../loader/Loader";
import { text } from "../../constants/constants";

import styles from './news.module.css';
// ----------------------------------------------------------------------------------------------------------------------------------------------

const API_KEY = 'pub_134488cb6dbb49732c32b30c33864255c0ece';
const API = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en`;

const NewsItem = () => {
    const [oneNews, setOneNews] = useState();  
    const { id } = useParams();        
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${API}&q=${id}`)
            .then((response) => {
                const oneNews= response.data.results[0]; 
                setOneNews(oneNews);
                console.log(oneNews);
            })
    }, [id]);

    const theme = useSelector((state) => state.theme.theme);

    const itemMainClass = classNames(styles.item__main, {     
        [styles.item__main_night]: theme === 'dark',     
    });

    const itemBtn = classNames(styles.item__btn, {     
        [styles.item__btn_night]: theme === 'dark',     
    });

    
    if(!oneNews) {
        return <Loader />
    }
    
    return(
        <div>
            {oneNews && (
                <div className={itemMainClass}>
                    <div className={styles.item__container}>
                        <h2 className={styles.item__title}>{oneNews.title}</h2>
                        <img
                            className={styles.item__img} 
                            src={oneNews.image_url 
                            ? oneNews.image_url 
                            : ('https://perimeterinstitute.ca/sites/default/files/styles/hero_banner_small_1440x502/public/2021-01/News.jpg?itok=5z1mrcsr' 
                                || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vxvgj6LIZ9bFAOVi3o4edBkEo6iNzSlPrm5RcoeNywhTUq5YqUX16-qFBOJ6EpRaii4&usqp=CAU')}
                        />                    
                        <p className={styles.item__content}>{oneNews.content ? oneNews.content : text}</p>
                        <div className={styles.item__info}>
                            <h3 className={styles.item__author}>Author: {oneNews.creator ? oneNews.creator : 'No name'}</h3>
                            <p className={styles.item__pubDate}> PubDate:{oneNews.pubDate ? oneNews.pubDate : 'No date'}</p>
                        </div>
                        <a className={styles.item__link} href={oneNews.link}>Link: {oneNews.link}</a>
                        <button
                            className={itemBtn}
                            onClick={() => {
                            dispatch(ADD_NEWS_TO_FAVOURITE(oneNews))
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                width: '25em',
                                background: '#000',
                                color: '#fff',
                                title: 'News added to favourite',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }}> Add to favourite
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NewsItem;