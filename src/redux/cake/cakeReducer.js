import { BUY_CAKE, REMOVE_CAKE } from "./cakeActionsType";

const initialState = {
    numOfCakes : 0
}

export const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
      case BUY_CAKE:
        return {
          ...state,
          numOfCakes: state.numOfCakes + 1,
        };
      case REMOVE_CAKE:
        if (state.numOfCakes > 0) {
          return {
            ...state,
            numOfCakes: state.numOfCakes - 1,
          }
        }else{
          return state
        }
        

      default:
        return state;
    }
}

