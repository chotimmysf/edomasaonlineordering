import CartIcon from "../Cart/cartIcon";
import classes from './header.module.css';

function HeaderCartButton(props) {
    return (
    <button className={classes.button}>
        <span className={classes.icon}><CartIcon /></span>
        <p>Your Cart</p>
        <span className={classes.badge}>3</span>
    </button>
    )
};

export default HeaderCartButton;