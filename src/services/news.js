import axios from "axios";
import { ADD_NEWS, GET_NEWS_SUCCESS } from '../redux/news/actions';

const API_KEY = 'pub_134488cb6dbb49732c32b30c33864255c0ece';
const API = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en`;
// ------------------------------------------------------------
export const fetchNews = () => {
    return function(dispatch) {
        axios.get(`${API}`)
            .then((response) => {
                const news = response.data.results;
                dispatch(GET_NEWS_SUCCESS(news));
        })
    }
}
