import { legacy_createStore, legacy_createStore } from "redux";

// REDUCER
const cartReducer = (
    state = {
        cart: [{id: 1, qty: 10}],
    },
    action
) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
            default:
                return state;
    };
};

// STORE
const store = legacy_createStore(cartReducer);
console.log("oncreate store : ", store.getState());

// SUBSCRIBE
store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState());
});

// DISPATCH
const action1 = { type: "ADD_TO_CART", payload: {id: 2, qty: 15} };
store.dispatch(action1);

const action2 = { type: "ADD_TO_CART", payload: {id: 5, qty: 25} };
store.dispatch(action2);