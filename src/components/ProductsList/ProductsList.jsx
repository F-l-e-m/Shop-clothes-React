import { useState } from "react";
import propTypes from './prop-types';

import ProductItem from '../ProductItem/ProductItem';

import styles from './ProductsList.module.scss';

const ProductsList = ({ categories, products }) => {
    const [activeCategory, setActiveCategory] = useState(null);
    const handleClickCategory = (id) => {
        setActiveCategory(id);
    };

    const productItems = products?.map(product => {
        return (
            <li key={product.id}>
               <ProductItem {...product} />
            </li>
        );
    })

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
        <div>
            <ul>
                <li className={ activeCategory === null ? styles.category_item_active : null } >
                    <button onClick={() => setActiveCategory(null)}>
                        Все
                    </button>
                </li>
                { categoryItems }
            </ul>
            <ul className={styles.product_list}>
                { productItems }
            </ul>
        </div>
    )
}

ProductsList.propTypes = propTypes;

export default ProductsList;