import { Fragment } from "react";
import MenuSummary from "./menuSummary";
import AvailableMenuItems from "./availableMenuItems";

const Menu = () => {
    return (
    <Fragment>
        <MenuSummary />
        <AvailableMenuItems />
    </Fragment>
    );
};

export default Menu;