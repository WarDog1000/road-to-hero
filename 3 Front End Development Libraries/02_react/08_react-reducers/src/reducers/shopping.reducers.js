import { TYPES } from "../actions/shopping.actions";

export const shoppingCartInitialState = {
  productos: [
    {id: 1, name: "producto 1", price: 100 },
    {id: 2, name: "producto 2", price: 200 },
    {id: 3, name: "producto 3", price: 300 },
    {id: 4, name: "producto 4", price: 400 },
    {id: 5, name: "producto 5", price: 500 }
  ],
  cart: []
}

export function shoppingReducer(state, action) {
  switch(action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.productos.find(producto => producto.id === action.payload);
      // console.log(newItem)

      let itemInCart = state.cart.find(item => item.id === newItem.id);

      return itemInCart 
      ? {
        ...state,
        cart: state.cart.map((item) => 
          item.id === newItem.id 
          ? {...item, quantity: item.quantity + 1}
          : item )
      } 
      : {
        ...state,
        cart: [...state.cart, {...newItem, quantity: 1}]
        }
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      break;
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      break;
    }
    case TYPES.CLEAR_CART: 
      return shoppingCartInitialState;
    default:
      return state;
  }
}