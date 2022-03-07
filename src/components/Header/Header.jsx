import logo from '../../assets/media/logo.svg';
import cart from '../../assets/media/cart.svg';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.info}>
                <img src={logo} alt="logo" className={styles.logo} />
                <h1 className={styles.title}>Shop Clothes</h1>
            </div>
            <div className={styles.panel}>
                <img src={cart} alt="cart" className={styles.cart} />
                <span>0</span>
            </div>
        </header>
    )
}

export default Header;