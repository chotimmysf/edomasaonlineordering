import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import MenuItemForm from './menuItemForm';
import classes from './individualMenuItem.module.css';

const IndividualMenuItem = props => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
    <li className={classes.item}>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
        <MenuItemForm onAddToCart={addToCartHandler} />
    </li>
    );
};

export default IndividualMenuItem;