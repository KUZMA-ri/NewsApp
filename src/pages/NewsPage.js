import NewsList from "../components/news/NewsList";
import Categories from '../components/categories/Categories';

const NewsPage = () => {
    return(
        <>
            <Categories />
        {/* Здесь вставить слайдер */}
            <NewsList />  
        </>
    )
}

export default NewsPage;