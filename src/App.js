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
            <Routes>
                <Route path='/' element={<NewsPage />} />
                <Route path='/news' element={<NewsList />} />
                <Route path='/news/:id' element={<NewsItem />} />
                <Route path='/favourite' element={<Favourites />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;