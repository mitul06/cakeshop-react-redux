import { BUY_PIZZA, REMOVE_PIZZA } from "./pizzaTypes";

export const buyPizza = () => {
    return {
      type: BUY_PIZZA,
    };
}
export const removePizza = () => {
    return {
        type : REMOVE_PIZZA
    }
}