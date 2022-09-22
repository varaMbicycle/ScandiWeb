import {IProduct} from "../Interfaces";

export const ADD = (card: IProduct) => ({type: 'ADD_TO_CART', payload: card})
export const DEL = (id:string) => ({type: 'DEL_FROM_CART', payload: id})
export const incrementQuantity = (id: string) => ({type: 'INCREMENT_QUANTITY', payload: id})
export const decrementQuantity = (id: string) => ({type: 'DECREMENT_QUANTITY', payload: id})
export const moveSlideRight = (id: string) => ({type: 'SLIDE_TO_RIGHT', payload: id})
export const moveSlideLeft = (id: string) => ({type: 'SLIDE_TO_LEFT', payload: id})
export const selectAttribute = (productId: string, attribute: string, item: string) => ({type: 'SELECT_ATTRIBUTE', payload: {productId, attribute, item}})
