import MENU_ITEMS from "./menuItems";
import Card from "../../UI/card";
import classes from './availableMenuItems.module.css';
import IndividualMenuItem from "./individualMenuItem";

const AvailableMenuItems = () => {
    const listOfMenuItems = MENU_ITEMS.map((item) => 
    <IndividualMenuItem 
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
    />);

    return <section className={classes.items}>
        <Card>
            <ul>
                {listOfMenuItems}
            </ul>
        </Card>
    </section>
};

export default AvailableMenuItems;