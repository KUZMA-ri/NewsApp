import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_NEWS_TO_FAVOURITE, REMOVE_NEWS_TO_FAVOURITE } from '../../redux/news/actions';
import axios from 'axios';

const API_KEY = 'pub_134488cb6dbb49732c32b30c33864255c0ece';
const API = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en`;

const NewsItem = () => {
    const [oneNews, setOneNews] = useState();  
    const { id } = useParams();         // title
    const dispatch = useDispatch();
    const newsList = useSelector((state) => state.news.news);
    const favouriteNews = useSelector((state) => state.news.favouriteNews);

    // --------------------------------------------------------------------------------------
    // const navigate = useNavigate(null);            // для возврата на предыдущую страницу
    // const goBack = () => navigate(-1);
// ------------------------------------------------------------------------------------------
    // let date = new Date(2022, 12, 7);
    // console.log(date);

    useEffect(() => {
        axios.get(`${API}&q=${id}`)
            .then((response) => {
                const oneNews= response.data.results[0]; // {...} 
                setOneNews(oneNews);
                console.log(oneNews);
            })
    }, [id]);

    const text = `Sed pulvinar proin gravida hendrerit. Sit amet purus gravida quis blandit turpis. Duis convallis convallis tellus id interdum velit laoreet id. Vel quam elementum pulvinar etiam non quam. Faucibus purus in massa tempor. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Suspendisse ultrices gravida dictum fusce. Velit dignissim sodales ut eu sem. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Nulla facilisi cras fermentum odio. Massa massa ultricies mi quis hendrerit dolor magna eget est. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Facilisis sed odio morbi quis commodo odio. Convallis aenean et tortor at risus. Fermentum et sollicitudin ac orci phasellus egestas.
            Fermentum leo vel orci porta non pulvinar. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Integer quis auctor elit sed vulputate mi sit amet. Nullam non nisi est sit amet. Habitasse platea dictumst quisque sagittis. Tempor id eu nisl nunc mi ipsum. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Non blandit massa enim nec dui. Sem integer vitae justo eget magna fermentum iaculis. Nisi est sit amet facilisis magna. Nunc consequat interdum varius sit. Vel fringilla est ullamcorper eget nulla. Euismod quis viverra nibh cras pulvinar. Facilisi etiam dignissim diam quis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Auctor urna nunc id cursus metus aliquam eleifend mi. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.
            Sed odio morbi quis commodo odio aenean sed. Egestas congue quisque egestas diam in arcu cursus. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. A condimentum vitae sapien pellentesque habitant morbi tristique. Sagittis purus sit amet volutpat consequat mauris nunc congue. Fringilla urna porttitor rhoncus dolor purus. Cum sociis natoque penatibus et magnis. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Lorem sed risus ultricies tristique. Viverra ipsum nunc aliquet bibendum. Ultricies integer quis auctor elit. Purus semper eget duis at tellus.
            Ornare arcu dui vivamus arcu. Risus ultricies tristique nulla aliquet. Velit laoreet id donec ultrices tincidunt arcu non. Id diam vel quam elementum pulvinar. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Nunc consequat interdum varius sit amet mattis. Sollicitudin nibh sit amet commodo nulla facilisi. Elit ullamcorper dignissim cras tincidunt lobortis. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Erat velit scelerisque in dictum. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Sem et tortor consequat id porta nibh venenatis cras. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Interdum varius sit amet mattis vulputate enim. Augue mauris augue neque gravida. Purus faucibus ornare suspendisse sed. Nisl rhoncus mattis rhoncus urna neque viverra. Gravida arcu ac tortor dignissim convallis aenean et tortor.`

    return(
        <div>
            {oneNews && (
                <div>
                    <button onClick={() => {
                        dispatch(ADD_NEWS_TO_FAVOURITE(oneNews))
                    }}>Add to favourite
                    </button>
                    
                    <h2>{oneNews.title}</h2>
                    <img 
                        src={oneNews.image_url 
                        ? oneNews.image_url 
                        : ('https://perimeterinstitute.ca/sites/default/files/styles/hero_banner_small_1440x502/public/2021-01/News.jpg?itok=5z1mrcsr' 
                            || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vxvgj6LIZ9bFAOVi3o4edBkEo6iNzSlPrm5RcoeNywhTUq5YqUX16-qFBOJ6EpRaii4&usqp=CAU')}
                    />                    
                    <p>{oneNews.content ? oneNews.content : text}</p>
                    <h3>Author: {oneNews.creator ? oneNews.creator : 'No name'}</h3>
                    <p> PubDate:{oneNews.pubDate ? oneNews.pubDate : 'No date'}</p>
                    <a href={oneNews.link}>Link: {oneNews.link}</a>
                </div>

            )}
        </div>
    )
}

export default NewsItem;