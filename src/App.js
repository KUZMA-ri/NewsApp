import { Routes, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import Menu from './components/header/Menu';
import Footer from './components/footer/Footer';
import NewsList from './components/news/NewsList';
import NewsItem from './components/news/NewsItem';
import Favourites from './pages/Favourites';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    return(
        <>
            <Menu />
            <Routes basename="/NewsApp">
                <Route path='/NewsApp' element={<NewsPage />} />
                <Route path='/business' element={<NewsList />} />
                <Route path='/entertainment' element={<NewsList />} />
                <Route path='/environment' element={<NewsList />} />
                <Route path='/food' element={<NewsList />} />
                <Route path='/health' element={<NewsList />} />
                <Route path='/politics' element={<NewsList />} />
                <Route path='/science' element={<NewsList />} />
                <Route path='/sports' element={<NewsList />} />
                <Route path='/technology' element={<NewsList />} />
                <Route path='/top' element={<NewsList />} />
                <Route path='/world' element={<NewsList />} />
                <Route path='/news' element={<NewsList />} />
                <Route path='/news/:id' element={<NewsItem />} />
                <Route path='/favourite' element={<Favourites />} />
                <Route path='*' element={<NotFoundPage />} /> 
            </Routes>
            <Footer />
        </>
    )
}

export default App;