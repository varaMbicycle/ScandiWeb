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
