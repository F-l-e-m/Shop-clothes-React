import styles from './CartItem.module.scss';

const CartItem = () => {
    return (
        <div>
            <div className={styles.cartItem}>
                <img src="https://via.placeholder.com/735" alt="item" />
                <div className={styles.itemDetails}>
                    <span className={styles.name}>
                        <span>Name:</span>
                        <span>Item 1</span>
                    </span>
                    <span className={styles.price}>
                        <span>Price:</span>
                        <span>$10</span>
                    </span>
                    <span className={styles.quantity}>
                        <span>Quantity:</span>
                        <span>1</span>
                    </span>
                    <span className={styles.removeButton}>Remove</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem;