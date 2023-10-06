import MenuItemForm from './menuItemForm';
import classes from './individualMenuItem.module.css';

const IndividualMenuItem = props => {
    const price = `$${props.price.toFixed(2)}`;

    return (
    <li className={classes.item}>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
        <MenuItemForm />
    </li>
    );
};

export default IndividualMenuItem;