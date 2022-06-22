export const SET_PRODUCTS = "@app/common/SET_PRODUCTS";
export const CLEAR_PRODUCTS = "@app/common/CLEAR_PRODUCTS";
export const ADD_TO_CART = "@app/common/ADD_TO_CART";

const initialState = { data: [], loading: false, cart: []  }

const addItemToCart = (state, action) => {
  const itemInCart = state.cart.find(item => item.id === action.payload.id);
  if(!itemInCart) {
    state.cart = [...state.cart, action.payload];
  }else {
    // TODOL: UPDATE ITEM COUNT
  }
  return { ...state };
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        data: action.payload
      };
    case ADD_TO_CART:
      return addItemToCart(state, action);

    case CLEAR_PRODUCTS:
      return initialState;
    default:
      return state;
  }
};

export default products;

export const setProducts = list => ({
  type: SET_PRODUCTS,
  payload: list
});

export const addToCart = product => ({
  type: ADD_TO_CART,
  payload: product
});

export const clearProducts = () => ({
  type: CLEAR_PRODUCTS
});
