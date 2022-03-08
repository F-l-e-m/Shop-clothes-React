import styles from './ProductItem.module.scss';
import propTypes, { defaultProps } from './prop-types';

const ProductItem = ({ img, name, price, sizes }) => {
    const sizesList = sizes?.map(size => (
        <li key={size} className={styles.size_item}>
            <button className={styles.button}>
                {size}
            </button>
        </li>
    ));

    return (
        <div>
            <div className={styles.img_container}>
                <img src={ img } alt={ name } className={styles.img} />
                <div className={styles.action}>
                    <ul className={styles.action_list}>
                        { sizesList }
                    </ul>
                    <button>Add</button>
                </div>
            </div>
            <div className={styles.item_details}>
                <span className={styles.name}>
                    <span>{ name }</span>
                </span>
                <span className={styles.price}>
                    <span>{ price } $</span>
                </span>
            </div>
        </div>
    )
}

ProductItem.propTypes = propTypes;
ProductItem.defaultProps = defaultProps;

export default ProductItem;