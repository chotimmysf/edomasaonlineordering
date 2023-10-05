import { Fragment } from "react";
import MenuSummary from "./menuSummary";
import AvailableMenuItems from "./MenuItem/availableMenuItems";

const Menu = () => {
    return (
    <Fragment>
        <MenuSummary />
        <AvailableMenuItems />
    </Fragment>
    );
};

export default Menu;