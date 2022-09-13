export const ADD = (card:any)=> {
	return (
		{type: 'ADD_TO_CART', payload: card}
	)
}
export const DEL = ()=> {
	return (
		{type: 'DEL_TO_CART', payload: 1}
	)
}
