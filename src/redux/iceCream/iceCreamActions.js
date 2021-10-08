import {BUY_ICECREAM, REMOVE_ICECREAM} from './iceCreamTypes'

export const buyIceCream = () => {
    return {
        type : BUY_ICECREAM
    }
}
export const removeIceCream = () => {
    return {
        type : REMOVE_ICECREAM
    }
}