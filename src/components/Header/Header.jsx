import { Link } from 'react-router-dom';

import logo from '../../assets/media/logo.svg';
import cart from '../../assets/media/cart.svg';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.info}>
                <img src={logo} alt="logo" className={styles.logo} />
                <h1 className={styles.title}>Shop Clothes</h1>
            </Link>
            <Link to="/cart" className={styles.panel}>
                <img src={cart} alt="cart" className={styles.cart_icon} />
                <span>0</span>
            </Link>
        </header>
    )
}

export default Header;