export interface ICategories {
	categories:{
		name: string;
	}
}

export interface ICategory {
	name: string
	products: IProduct[]
}

export interface IProduct {
	quantity: number | string;
	id: string
	name: string
	inStock: boolean
	gallery: string[]
	description: string
	category: string
	attributes: IAttributes[]
	prices: IPrice[]
	brand: string
}

export interface IAttributes {
	value?: string;
	index?: number;
	quantity: number;
	activeItem?: number
	id: string
	name: string
	type: string
	items: IAttribute[]
}

export interface IAttribute{
	displayValue: string
	value: string
	id: string
}

export interface ICurrency {
	label: string
	symbol: string
}

export interface IPrice {
	amount: number
	currency: ICurrency
}
