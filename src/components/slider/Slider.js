import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './slider.module.css';

import food from '../../images/categories/food.jpg';
import sport from '../../images/categories/sport.jpg';
import world from '../../images/categories/world.webp';
import health from '../../images/categories/health.jpg';
import science from '../../images/categories/scince.webp';
import politics from '../../images/categories/politics.jpg';
import business from '../../images/categories/business.webp';
import technology from '../../images/categories/technology.webp';
import environment from '../../images/categories/environment.webp';
import entertainment from '../../images/categories/entertainment.jpg';
// -------------------------------------------------------------------------------------------------------------------------------------------------

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className={styles.image}          
                    src={world}
                    alt="First slide"
                />
                <Carousel.Caption className={styles.carousel_caption}>
                    <div className={styles.content__container}>
                        <div className={styles.content}>
                            <h3 className={styles.title}>The city that loves to be rude</h3>
                            <Link to='*' className={styles.readMore}>Read more...</Link>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className={styles.image}
                    src={food}
                    alt="Second slide"
                />
                <Carousel.Caption className={styles.carousel_caption}>
                <div className={styles.content__container}>

                </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>The way to cut your food's climate emissions</h3>
                        <Link to='*' className={styles.readMore}>Read more...</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className={styles.image}
                    src={health}
                    alt="Third slide"
                />
                <Carousel.Caption className={styles.carousel_caption}>
                <div className={styles.content__container}>
                    
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>Infectious Covid virus can stay on some groceries for days</h3>
                        <Link to='*' className={styles.readMore}>Read more...</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className={styles.image}
                    src={business}
                    alt="Third slide"
                />
                <Carousel.Caption className={styles.carousel_caption}>
                <div className={styles.content__container}>
                    
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>The workers lured into oversold jobs</h3>
                        <Link to='*' className={styles.readMore}>Read more...</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className={styles.image}
                    src={entertainment}
                    alt="Third slide"
                />
                <Carousel.Caption className={styles.carousel_caption}>
                <div className={styles.content__container}>
                    
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>The story of Light Entertainment</h3>
                        <Link to='*' className={styles.readMore}>Read more...</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className={styles.image}
                    src={environment}
                    alt="Third slide"
                />
                <Carousel.Caption className={styles.carousel_caption}>
                <div className={styles.content__container}>
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>The Alpine villages producing their own power</h3>
                        <Link to='*' className={styles.readMore}>Read more...</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className={styles.image}
                    src={politics}
                    alt="Third slide"
                />
                <Carousel.Caption className={styles.carousel_caption}>
                    <div className={styles.content__container}>
                        <div className={styles.content}>
                            <h3 className={styles.title}>People and politics</h3>
                            <Link to='*' className={styles.readMore}>Read more...</Link>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className={styles.image}
                    src={science}
                    alt="Third slide"
                />
                <Carousel.Caption className={styles.carousel_caption}>
                    <div className={styles.content__container}>
                        <div className={styles.content}>
                            <h3 className={styles.title}>The rich marine life under frozen ice</h3>
                            <Link to='*' className={styles.readMore}>Read more...</Link>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className={styles.image}
                    src={sport}
                    alt="Third slide"
                />
                <Carousel.Caption className={styles.carousel_caption}>
                    <div className={styles.content__container}>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Big sporting events</h3>
                            <Link to='*' className={styles.readMore}>Read more...</Link>
                        </div>                 
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className={styles.image}
                    src={technology}
                    alt="Third slide"
                />
                <Carousel.Caption className={styles.carousel_caption}>
                    <div className={styles.content__container}>
                        <div className={styles.content}>
                            <h3 className={styles.title}>How limitless green energy would change the world</h3>
                            <Link to='*' className={styles.readMore}>Read more...</Link>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;