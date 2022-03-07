import { useState } from "react";

import CartItem from '../CartItem/CartItem';

import styles from './CartList.module.scss';

const CartList = ({ categories }) => {
    const [activeCategory, setActiveCategory] = useState(null);
    const handleClickCategory = (id) => {
        setActiveCategory(id);
    };

    const categoryItems = categories?.map(category => {
        return (
            <li key={category.id} className={ activeCategory === category.id ? styles.category_item_active : null }>
                <button onClick={() => handleClickCategory(category.id)}>
                    { category.name }
                </button>
            </li>
        )
    });

    return (
        <div className={styles.cartList}>
            <ul>
                <li className={ activeCategory === null ? styles.category_item_active : null } >
                    <button onClick={() => setActiveCategory(null)}>
                        Все
                    </button>
                </li>
                { categoryItems }
            </ul>
            <ul>
                <li>
                    <CartItem />
                </li>
            </ul>
        </div>
    )
}

export default CartList;