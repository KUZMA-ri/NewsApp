import { useSelector } from "react-redux";

import NewsList from "../components/news/NewsList";
import Slider from "../components/slider/Slider";
// ---------------------------------------------------------------------------------------------------------------------------------------------


const NewsPage = () => {
    const category = useSelector(state => state.news.category);
    
    if(!category) {
        return(
            <div>
                <Slider />
                <NewsList />  
            </div>
        )
    }
    return(
        <div>
            <NewsList />  
        </div>
    )
}

export default NewsPage;