import React, { useContext } from 'react'
import styles from './sidebar.module.scss'
import { sidebarContext } from '../../context/sidebar.context'
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import { Searchbar } from '../search-bar/search-bar';
import { ShoppingCart } from '../cart/shopping-cart';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../redux/features/user.slice';

export const Sidebar = () => {

    const { is_sidebar, sidebarOpen, sidebarClose } = useContext(sidebarContext)



    const is_sidebar_active = is_sidebar ? `${styles.sidebar_container} ${styles.active}` : `${styles.sidebar_container}`


    const isLogin = useSelector(state => state.user.isLogin)
    const dispatch = useDispatch()

    const signOut = () => {
        dispatch(removeUser())
    }

    return (
        <aside className={is_sidebar_active}>
            <span className={styles.close_sidebar_icon} onClick={() => sidebarClose()}><RxCross2 /></span>
            <div className={styles.side_nav_container}>

                <div>
                    <div className={styles.global_search_container}>
                        <Searchbar></Searchbar>
                    </div>

                    <div className={styles.global_shopping_cart_container}>
                        <h5>My Cart</h5>
                        <ShoppingCart></ShoppingCart>
                    </div>
                </div>


                <div className={styles.side_nav_link}>
                    <ul>
                        <li className="nav-item mx-3">
                            <NavLink to='/' className={`${styles.nav_link_item} nav-link active`}>Home</NavLink>
                        </li>

                        <li className="nav-item mx-3">
                            <NavLink to='/contact' className={`${styles.nav_link_item} nav-link active`}>Contact</NavLink>
                        </li>
                        <li className="nav-item mx-3">

                            <NavLink to='/about' className={`${styles.nav_link_item} nav-link active`}>About</NavLink>
                        </li>

                        {isLogin ? <li className="nav-item mx-3">

                            <NavLink onClick={signOut} className={`${styles.nav_link_item} nav-link active`}>Sign Out</NavLink>
                        </li> : <li className="nav-item mx-3">

                            <NavLink to='/auth/signup' className={`${styles.nav_link_item} nav-link active`}>Sign Up</NavLink>
                        </li>}

                    </ul>

                </div>
            </div>
        </aside>
    )
}
