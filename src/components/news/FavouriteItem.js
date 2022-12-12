import { useSelector } from "react-redux";

import Swal from 'sweetalert2';
import classNames from 'classnames';

import Accordion from 'react-bootstrap/Accordion';

import { text } from '../../constants/constants';

import styles from './news.module.css';
// ---------------------------------------------------------------------------------------------------------------------------------------------

const FavouriteItem = ({title, content, creator, pubDate, image_url, link, onClick}) => {
    const theme = useSelector((state) => state.theme.theme);

    const itemBtn = classNames(styles.item__btn, {     
        [styles.item__btn_night]: theme === 'dark',     
    });

    const newsContainerClass = classNames(styles.news__container, {
        [styles.news__container_night]: theme === 'dark', 
    })

    const titleClass = classNames(styles.news__title, {
        [styles.news__title_night]: theme === 'dark', 
    })

    return(
            <div className={newsContainerClass}>
                <div className={styles.news__containerImage}>
                    <img 
                    className={styles.news__img}
                        src={image_url 
                        ? image_url 
                        : ('https://perimeterinstitute.ca/sites/default/files/styles/hero_banner_small_1440x502/public/2021-01/News.jpg?itok=5z1mrcsr' 
                            || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vxvgj6LIZ9bFAOVi3o4edBkEo6iNzSlPrm5RcoeNywhTUq5YqUX16-qFBOJ6EpRaii4&usqp=CAU')}
                    /> 
                </div>
                <h1 className={titleClass}>{title}</h1>                
                            
                <div >
                    <h3>Author: {creator ? creator : 'No name'}</h3>
                    <p> PubDate:{pubDate ? pubDate : 'No date'}</p>
                </div>
                <div className={styles.accorgion_container}>
                    <Accordion className={styles.accordion}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header  style={{ backgroundColor: 'lavender' }}>Read news</Accordion.Header>
                            <Accordion.Body>
                                {content ? content : text}
                            </Accordion.Body>
                        </Accordion.Item> 
                    </Accordion>      
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