import { useEffect, useState } from 'react';

import Header from '../components/Header/Header';
import CartList from '../components/CartList/CartList';

import { Categories, Products } from "../api";

import styles from './Main.module.scss';

const Main = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        Categories.getAll().then(res => {
            setCategories([...res.data]);
        });
    }, []);

    return (
        <div className={styles.main}>
            <Header />
            <CartList categories={categories} />
        </div>
    )
}

export default Main;