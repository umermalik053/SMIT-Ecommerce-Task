import { ProductAction } from "../Action/ActionType";


const initialValue = {
    AllProducts:[],
    Cart:[]
}

export const ProductRenducer= (state = initialValue , {type,payload})=>{
    switch(type){
        case ProductAction.product:
            return {...state, AllProducts:[...state.AllProducts, ...payload]};
            case ProductAction.Add_Cart:
            return {...state, Cart:[...state.Cart, payload]};
            case ProductAction.Remove_Card_Products:
            return {...state, Cart:[...state.Cart.filter((item) => item.id !== payload.id)]};
        default:
            return state
    }

}