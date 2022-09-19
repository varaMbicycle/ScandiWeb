export interface activeProduct {
	name: string;
	brand: string;
	cost: string;
	currency: string;
	quantity: number;
	gallery: [
		{
			url: string;
			isActive: boolean;
		}
	]
	attributes:[
		{
			id: string;
			name: string;
			items: [
				{
					value: string;
					displayValue: string;
					id: string;
					isActive: boolean;
				}

			]
		}
	]
}
export const changeProductForBasket = (product: any) => (
	{
		...product,
		activeImg: 0,
		attributes: product.attributes.map((attribute: any) => (
			{
				...attribute,
				activeItem: 0,
			}
		))
	}
)
