import { IAttributes, IProduct} from "../Interfaces";
import {v4 as uuidv4} from "uuid";
export const changeProductForBasket = (product: IProduct) => (
	{
		...product,
		activeImg: 0,
		id: product.id + uuidv4(),
		attributes: product.attributes.map((attribute: IAttributes) => (
			{
				...attribute,
				activeItem: 0,
			}
		))
	}
)

export const pushToLocalStorage = (cart : IProduct) => {
	localStorage.setItem('cart', JSON.stringify(cart));
}

