import { Fragment } from 'react';
import classes from './header.module.css';
import restarauntBanner from "../../assets/yakitori-assortment.jpg";
import HeaderCartButton from './headerCartButton';

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Edomasa Online Order</h1>
            <HeaderCartButton onBtnClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={restarauntBanner} alt="Various meat and vegetable skewers on a rectangular plate"/>
        </div>
    </Fragment>
};

export default Header;