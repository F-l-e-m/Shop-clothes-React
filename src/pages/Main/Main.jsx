import { useEffect, useState } from 'react';

import CartList from '../../components/ProductsList/ProductsList';

import { Categories, Products } from "../../api";

import styles from './Main.module.scss';
import ProductsList from "../../components/ProductsList/ProductsList";

const Main = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        Categories.getAll().then(({ data }) => {
            setCategories([...data]);
        });
        Products.getAll().then(({ data }) => {
            setProducts([...data]);
        });
    }, []);

    return (
        <div className={styles.main}>
            <ProductsList categories={categories} products={products} />
        </div>
    )
}

export default Main;