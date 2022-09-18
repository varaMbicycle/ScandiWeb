export const ADD = (card: any) => ({type: 'ADD_TO_CART', payload: card})
export const DEL = () => ({type: 'DEL_TO_CART', payload: 1})
export const incrementQuantity = (id: string) => ({type: 'INCREMENT_QUANTITY', payload: id})
export const decrementQuantity = (id: string) => ({type: 'DECREMENT_QUANTITY', payload: id})
