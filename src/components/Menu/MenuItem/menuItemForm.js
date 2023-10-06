import classes from './menuItemForm.module.css';
import Input from '../../UI/Input';

const MenuItemForm = (props) => {
    return <form className={classes.form}>
        <Input label="Amount" input={{
            id: "amount",
            type: "number",
            min: '1',
            max: '100',
            step: '1',
            defaultValue: '1'
        }}/>
        <button>Add To Cart</button>
    </form>
}

export default MenuItemForm;