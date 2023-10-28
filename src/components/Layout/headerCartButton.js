import { useContext } from "react";
import CartIcon from "../Cart/cartIcon";
import CartContext from "../../store/cart-context";
import classes from './header.module.css';

function HeaderCartButton(props) {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
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