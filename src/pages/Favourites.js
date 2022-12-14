import { useDispatch, useSelector } from "react-redux"

import classNames from 'classnames';

import {REMOVE_NEWS_TO_FAVOURITE } from '../redux/news/actions';

import FavouriteItem from '../components/news/FavouriteItem';
import Search  from '../components/search';

import styles from './styles/favourites.module.css';
// ------------------------------------------------------------------------------------------------------------------------------------------

const Favourites = () => {
    const dispatch = useDispatch();
    const favouriteNews = useSelector((state) => state.news.favouriteNews);
    const theme = useSelector((state) => state.theme.theme);
    const search_favourite = useSelector(state => state.search.search_favourite);

    const mainClass = classNames(styles.favourites__main, {     
        [styles.favourites__main_night]: theme === 'dark',     
    });

    const wrapperFavouriteItems = classNames(styles.wrapperFavouriteItems, {
        [styles.wrapperFavouriteItems_night]: theme === 'dark',
    })

    const handleClick = (title) => {
        dispatch(REMOVE_NEWS_TO_FAVOURITE(title));
    }

    const oneFavNews = (search_favourite ? search_favourite : favouriteNews).map((item, index) => {
        return <FavouriteItem key={item.title ? item.title : index} {...item} onClick={handleClick}/>
    })

    if(oneFavNews.length === 0) {
        return (
            <div className={mainClass}>
                <Search favouriteNews={favouriteNews}/>     
                <div className={styles.container}>
                    <h1>No favorites</h1>
                </div>
            </div>
        )
    }

    return(
        <div  className={wrapperFavouriteItems}>
            <Search favouriteNews={favouriteNews}/>
            <div className={styles.row}>
                {oneFavNews}
            </div>

        </div>
    )
}

export default Favourites;