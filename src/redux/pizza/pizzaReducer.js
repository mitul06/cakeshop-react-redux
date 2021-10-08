import { BUY_PIZZA, REMOVE_PIZZA } from "./pizzaTypes";

const initialState = {
    numOfPizza : 0
}

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PIZZA:
      return {
        ...state,
        numOfPizza: state.numOfPizza + 1,
      };
    case REMOVE_PIZZA:
      if(state.numOfPizza > 0){
      return {
        ...state,
        numOfPizza: state.numOfPizza - 1,
      }
    }else {
      return state
    }

    default:
      return state;
  }
};