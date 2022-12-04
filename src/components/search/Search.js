import { filter } from "lodash";
import { useDispatch } from "react-redux";
import { SEARCH } from '../../redux/search/actions';

const Search = ({news}) => {
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
    }
    return(
        <div>
            <input 
                type='text'
                placeholder='Search...'
                name='search'
                onChange={searching}
            />
        </div>
    )
}

export default Search;