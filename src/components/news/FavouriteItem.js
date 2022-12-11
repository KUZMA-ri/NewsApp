import { useSelector } from "react-redux";

import Swal from 'sweetalert2';
import classNames from 'classnames';

import { text } from '../../constants/constants';

import styles from './news.module.css';
// ---------------------------------------------------------------------------------------------------------------------------------------------

const FavouriteItem = ({title, content, creator, pubDate, image_url, link, onClick}) => {
    const theme = useSelector((state) => state.theme.theme);

    const itemMainClass = classNames(styles.item__main, {     
        [styles.item__main_night]: theme === 'dark',     
    });

    const itemBtn = classNames(styles.item__btn, {     
        [styles.item__btn_night]: theme === 'dark',     
    });

    return(
        <div className={itemMainClass}>
            <div className={styles.item__container}>
                <h1 className={styles.item__title}>{title}</h1>
                <img 
                    className={styles.item__img}
                    src={image_url 
                    ? image_url 
                    : ('https://perimeterinstitute.ca/sites/default/files/styles/hero_banner_small_1440x502/public/2021-01/News.jpg?itok=5z1mrcsr' 
                        || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vxvgj6LIZ9bFAOVi3o4edBkEo6iNzSlPrm5RcoeNywhTUq5YqUX16-qFBOJ6EpRaii4&usqp=CAU')}
                />                    
                <p className={styles.item__content}>{content ? content : text}</p>
                <div className={styles.item__info}>
                    <h3 className={styles.item__author}>Author: {creator ? creator : 'No name'}</h3>
                    <p className={styles.item__pubDate}> PubDate:{pubDate ? pubDate : 'No date'}</p>
                </div>
                <a className={styles.item__link} href={link}>Link: {link}</a>
                <button 
                    className={itemBtn} 
                    onClick={() => {
                        onClick(title)
                        Swal.fire({
                            position: 'top-end',
                            width: '25em',
                            background: '#000',
                            color: '#fff',
                            icon: 'error',
                            title: 'News deleted from favourite',
                            showConfirmButton: false,
                            timer: 1500
                        })                       
                    }}>
                        Remove from favourites
                </button>
            </div>
        </div>
    )
}

export default FavouriteItem;