import { createStore } from 'redux';

const initalstate = {products: [], username: '' };

const counterReducer = (state = initalstate, action) => {
  if (action.type === 'ENTER_NAME') {
    return {
      products: state.products,
      username: action.username
    };
  }

  if (action.type === 'ADD_PRODUCT') {
    return {
      products: state.products.concat(action.product),
      username: state.username
    };
  }

  if (action.type === 'REMOVE_PRODUCT') {
    console.log(action.productnumber)

    return {
      products: state.products.filter(x => x.productnumber !== action.productnumber),
      username: state.username
    };
  }
  return state
}

const store = createStore(counterReducer);

export default store;