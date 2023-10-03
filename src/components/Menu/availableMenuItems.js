import MENU_ITEMS from "./menuItems";
import classes from './availableMenuItems.module.css';

const AvailableMenuItems = () => {
    const listOfMenuItems = MENU_ITEMS.map((item) => <li>{item.name}</li>);

    return <section className={classes.items}>
        <ul>
            {listOfMenuItems}
        </ul>
    </section>
};

export default AvailableMenuItems;