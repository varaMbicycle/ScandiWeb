import { IAttributes, IProduct} from "../Interfaces";

export const changeProductForBasket = (product: IProduct) => (
	{
		...product,
		activeImg: 0,
		attributes: product.attributes.map((attribute: IAttributes) => (
			{
				...attribute,
				activeItem: 0,
			}
		))
	}
)

export const pushToLocalStorage = (cart : IProduct) =>{
	localStorage.setItem('cart', JSON.stringify(cart));
}