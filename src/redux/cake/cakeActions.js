import { BUY_CAKE, REMOVE_CAKE } from "./cakeActionsType"

export const buyCake = () => {
    return {
        type : BUY_CAKE
    }
}
export const removeCake = () => {
  return {
    type: REMOVE_CAKE,
  };
};