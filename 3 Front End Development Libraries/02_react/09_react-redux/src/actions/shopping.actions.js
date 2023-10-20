import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../types";

export const addTocart = (id) => ({type: ADD_TO_CART, payload: id});
export const removeFromCart = (id, all=false) =>
 all ? {type: REMOVE_ALL_FROM_CART, payload: id} : {type: REMOVE_ONE_FROM_CART, payload: id}

export const clearCart = () => ({type: CLEAR_CART});

