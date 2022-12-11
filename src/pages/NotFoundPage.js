import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import classNames from 'classnames';

import styles from '../pages/styles/notFoundPage.module.css';
// -----------------------------------------------------------------------------------------------------------------------------------------------

const NotFoundPage = () => {
    const theme = useSelector((state) => state.theme.theme);

    const mainClass = classNames(styles.main, {     
        [styles.main_night]: theme === 'dark',     
    });

    const btnLinkToHome = classNames(styles.linkToHome, {     
        [styles.linkToHome_night]: theme === 'dark',     
    });

    const text = classNames(styles.text, {
        [styles.text_night]: theme === 'dark', 
    })

    return(
        <div className={mainClass}>
            <div className={styles.container}>
                <h1 className={text}>Sorry, but there is no content...</h1>
                <Link to='./NewsApp'><button className={btnLinkToHome}>Go to home</button></Link>
            </div>
        </div>
    )
}

export default NotFoundPage;