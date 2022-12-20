import { useDispatch } from "react-redux";

import { SEARCH, SEARCH_FAVOURITE} from '../../redux/search/actions';

import styles from './search.module.css';
// ---------------------------------------------------------------------------------------------------------------------------------------------

const Search = ({news, favouriteNews}) => {
    const dispatch = useDispatch();
    const searching = (e) => {
        let inputValue = e.target.value;
        if(news) {
            let copySearchNews = [...news];
            if(inputValue) {
                let filterItem = copySearchNews.filter((item) => {
                    return item.title.toLowerCase().includes(inputValue.toLowerCase());
                });
                dispatch(SEARCH(filterItem));
                
            } else {
                dispatch(SEARCH(null))
            }
        }

        if(favouriteNews) {
            let copySearchNews = [...favouriteNews];
            if(inputValue) {
                let filterItem = copySearchNews.filter((item) => {
                    return item.title.toLowerCase().includes(inputValue.toLowerCase());
                });
                inputValue = '';
                dispatch(SEARCH_FAVOURITE(filterItem));
            } else {
                dispatch(SEARCH_FAVOURITE(null))
            }
        }
    }
    return(
        <div className={styles.search}>
            <input 
            className={styles.search__input}
                type='text'
                placeholder='Search...'
                name='search'
                autoComplete="off"
                onChange={searching}
            />
        </div>
    )
}

export default Search;