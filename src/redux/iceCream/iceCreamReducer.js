import { BUY_ICECREAM, REMOVE_ICECREAM } from "./iceCreamTypes";

const initialState = {
    numOfIcecream : 0
}

export const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
      case BUY_ICECREAM:
        return {
          ...state,
          numOfIcecream: state.numOfIcecream + 1,
        };
      case REMOVE_ICECREAM:
        if (state.numOfIcecream > 0) {
          return {
            ...state,
            numOfIcecream: state.numOfIcecream - 1,
          };
        } else {
          return state;
        }

      default:
        return state;
    }
}

