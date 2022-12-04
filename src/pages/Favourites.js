import { useDispatch, useSelector } from "react-redux"
import FavouriteItem from '../components/news/FavouriteItem';
import {REMOVE_NEWS_TO_FAVOURITE } from '../redux/news/actions';

const Favourites = () => {
    const favouriteNews = useSelector((state) => state.news.favouriteNews);
    const dispatch = useDispatch();
    console.log(favouriteNews);

    const handleClick = (title) => {
        dispatch(REMOVE_NEWS_TO_FAVOURITE(title))
    }

    const oneFavNews = favouriteNews.map(item => {
        return <FavouriteItem key={item.title} {...item} onClick={handleClick} />
    })


    return(
        <div>
            {oneFavNews}
        </div>

    )
}

export default Favourites;