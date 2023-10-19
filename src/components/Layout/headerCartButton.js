import { useContext } from "react";
import CartContext from "../store/cart-context";
import CartIcon from "../Cart/cartIcon";
import classes from './header.module.css';

function HeaderCartButton(props) {
    const cartCtxt = useContext(CartContext);

    const numberOfCartItems = cartCtxt.items.reduce((curNmbr, item) => {
        return curNmbr + item.amount;
    }, 0);

    return (
    <button className={classes.button} onClick={props.onBtnClick}>
        <span className={classes.icon}><CartIcon /></span>
        <p>Your Cart</p>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
    )
};

export default HeaderCartButton;