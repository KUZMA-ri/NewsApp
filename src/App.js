import { Routes, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import Menu from './components/header';
import Footer from './components/footer';
import NewsList from './components/news/NewsList';
import NewsItem from './components/news/NewsItem';
import Favourites from './pages/Favourites';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    return(
        <>
            <Menu />
            <Routes >
                <Route path='/NewsApp' element={<NewsPage />} />
                <Route path='/NewsApp/business' element={<NewsList />} />
                <Route path='/NewsApp/entertainment' element={<NewsList />} />
                <Route path='/NewsApp/environment' element={<NewsList />} />
                <Route path='/NewsApp/food' element={<NewsList />} />
                <Route path='/NewsApp/health' element={<NewsList />} />
                <Route path='/NewsApp/politics' element={<NewsList />} />
                <Route path='/NewsApp/science' element={<NewsList />} />
                <Route path='/NewsApp/sports' element={<NewsList />} />
                <Route path='/NewsApp/technology' element={<NewsList />} />
                <Route path='/NewsApp/top' element={<NewsList />} />
                <Route path='/NewsApp/world' element={<NewsList />} />
                <Route path='/NewsApp/news' element={<NewsList />} />
                <Route path='/NewsApp/news/:id' element={<NewsItem />} />
                <Route path='/NewsApp/favourite' element={<Favourites />} />
                <Route path='*' element={<NotFoundPage />} /> 
            </Routes>
            <Footer />
        </>
    )
}

export default App;