import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { changeTheme } from '../../redux/theme/actions';
import { GET_CATEGORIES } from '../../redux/news/actions';

import CustomizedSwitches from '../switcher';

import home from '../../images/home.png';
import contacts from '../../images/contacts.png';
import category from '../../images/category.png';

import styles from './menu.module.css';
// -----------------------------------------------------------------------------------------------------------------------------------------------

const Menu = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);
    
    const switchTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        dispatch(changeTheme(nextTheme));
    }

    return(
        <div className={styles.header}>
            <div className={styles.container}>
                <div>
                    <ul className={styles.header__list}>
                        <li className={styles.header__logoContainer}>
                            <span className={styles.header__logo}>N</span>
                            <span className={styles.header__logo}>E</span>
                            <span className={styles.header__logo}>W</span>
                            <span className={styles.header__logo}>S</span>                        
                        </li>
                        <Link to={'/NewsApp'}>
                            <li className={styles.header__link}>
                                <h1 className={styles.header__text}>Home</h1>
                                <img className={styles.header__mobileImg} src={home}/>
                            </li>
                        </Link>
                        
                        <li className={styles.header__link}>
                            <h1 className={styles.header__text}>Categories</h1>
                            <img className={styles.header__mobileImg} src={category}/>                            
                                <ul className={styles.categories__list}>
                                    <Link to={'/NewsApp'}><li className={styles.categories__link} onClick={(e) => dispatch(GET_CATEGORIES(''))}>All</li></Link>    
                                    <Link to={'/NewsApp/business'}><li className={styles.categories__link} onClick={(e) => dispatch(GET_CATEGORIES(e.target.textContent.toLowerCase()))}>Business</li></Link>
                                    <Link to={'/NewsApp/entertainment'}><li className={styles.categories__link} onClick={(e) => dispatch(GET_CATEGORIES(e.target.textContent.toLowerCase()))}>Entertainment</li></Link>  
                                    <Link to={'/NewsApp/environment'}><li className={styles.categories__link} onClick={(e) => dispatch(GET_CATEGORIES(e.target.textContent.toLowerCase()))}>Environment</li></Link>
                                    <Link to={'/NewsApp/food'}><li className={styles.categories__link} onClick={(e) => dispatch(GET_CATEGORIES(e.target.textContent.toLowerCase()))}>Food</li></Link>
                                    <Link to={'/NewsApp/health'}><li className={styles.categories__link} onClick={(e) => dispatch(GET_CATEGORIES(e.target.textContent.toLowerCase()))}>Health</li></Link>
                                    <Link to={'/NewsApp/politics'}><li className={styles.categories__link} onClick={(e) => dispatch(GET_CATEGORIES(e.target.textContent.toLowerCase()))}>Politics</li></Link>
                                    <Link to={'/NewsApp/science'}><li className={styles.categories__link} onClick={(e) => dispatch(GET_CATEGORIES(e.target.textContent.toLowerCase()))}>Science</li></Link>
                                    <Link to={'/NewsApp/sports'}><li className={styles.categories__link} onClick={(e) => dispatch(GET_CATEGORIES(e.target.textContent.toLowerCase()))}>Sports</li></Link>
                                    <Link to={'/NewsApp/technology'}><li className={styles.categories__link} onClick={(e) => dispatch(GET_CATEGORIES(e.target.textContent.toLowerCase()))}>Technology</li></Link>
                                    <Link to={'/NewsApp/top'}><li className={styles.categories__link} onClick={(e) => dispatch(GET_CATEGORIES(e.target.textContent.toLowerCase()))}>Top</li></Link>
                                    <Link to={'/NewsApp/world'}><li className={styles.categories__link} onClick={(e) => dispatch(GET_CATEGORIES(e.target.textContent.toLowerCase()))}>World</li></Link>
                                </ul>
                        </li>
                        <Link to='*'>
                            <li className={styles.header__link}>
                                <h1 className={styles.header__text}>Contacts</h1>
                                <img className={styles.header__mobileImg} src={contacts}/>
                            </li>
                        </Link>
                        <Link to={'/NewsApp/favourite'}>
                            <svg className={styles.header__favourites} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" width="40px" height="40px"><path d="M24.501,98.001c-1.021,0-2.042-0.245-2.952-0.709C19.361,96.179,18,93.959,18,91.5v-75	C18,10.701,22.701,6,28.5,6h47C81.299,6,86,10.701,86,16.5v75.501c0,3.314-2.686,6-5.999,6h0c-1.299,0-2.562-0.421-3.601-1.2L50,77	l3.011,1.949L28.322,96.757C27.215,97.567,25.889,98.001,24.501,98.001z" opacity=".35"/><path fill="#000" d="M22.501,96.001c-1.021,0-2.042-0.245-2.952-0.709C17.361,94.179,16,91.959,16,89.5v-75	C16,8.71,20.71,4,26.5,4h47C79.29,4,84,8.71,84,14.5v75c0,2.459-1.361,4.679-3.552,5.793C79.54,95.756,78.521,96,77.5,96	c-1.387,0-2.712-0.432-3.831-1.249L50,77.537l-23.678,17.22C25.215,95.567,23.889,96.001,22.501,96.001z"/><path fill="#f66" d="M26.5,10.5h47c2.209,0,4,1.791,4,4v75L50,69.5l-27.5,20v-75C22.5,12.291,24.291,10.5,26.5,10.5z"/><path fill="none" stroke="#fff" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M26.5,10.5h47	c2.209,0,4,1.791,4,4v75L50,69.5l-27.5,20v-75C22.5,12.291,24.291,10.5,26.5,10.5z"/></svg>
                        </Link>
                        < CustomizedSwitches switchTheme={switchTheme}/>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Menu;
