import { Routes, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import Menu from './components/header/Menu';
import Footer from './components/footer/Footer';
import NewsList from './components/news/NewsList';
import NewsItem from './components/news/NewsItem';
import Favourites from './pages/Favourites';

const App = () => {
    return(
        <>
            <Menu />
            <Routes basename="/NewsApp/">
                <Route path='/NewsApp/' element={<NewsPage />} />
                <Route path='/NewsApp/news' element={<NewsList />} />
                <Route path='/NewsApp/news/:id' element={<NewsItem />} />
                <Route path='/NewsApp/favourite' element={<Favourites />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;