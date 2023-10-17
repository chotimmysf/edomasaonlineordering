import Modal from '../UI/modal';
import classes from './cart.module.css';

const Cart = (props) => {
    const cartItems = (
        <ul className={classes['cart-items']}>{
            [{id: 'm21', name: 'Salmon Teriyaki', price: 13.49}].map((cartItem) => (<li>{cartItem.name}</li>))
        }</ul>
    );

    return (
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount:</span>
            <span>26.98</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
    );
};

export default Cart;