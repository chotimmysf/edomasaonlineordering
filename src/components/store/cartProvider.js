import { useReducer } from 'react';
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD_CART_ITEM') {
        const updatedItems = state.items.concat(action.item);
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        };
    }
    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, implementCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        implementCartAction({type: 'ADD_CART_ITEM', cartItem: item});
    };

    const removeItemFromCartHandler = id => {
        implementCartAction({type: 'REMOVE_CART_ITEM', cartId: id});
    };

    const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;