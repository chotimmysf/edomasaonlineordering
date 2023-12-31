import { useContext } from 'react';
import Modal from '../UI/modal';
import classes from './cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './cartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmt = `${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1});
    };

    const cartItems = (
        <ul className={classes['cart-items']}>{
            cartCtx.items.map((item) => (<li>
                <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
                />
                </li>))
        }</ul>
    );

    return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount:</span>
            <span>{totalAmt}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
    );
};

export default Cart;