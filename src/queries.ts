import {graphql} from "@apollo/client/react/hoc";
import {gql} from "@apollo/client";

export const getCategories = graphql(gql`
	query {
		categories {
             name
             products{
                  id
             }
        }
    }`);

export const getCurrencies = graphql(gql`
		query {
			currencies{
			label
            symbol
			}
		}
	`);

export const getProductsOfCategory = () => graphql(gql`
query getCategory($input: CategoryInput) {
  category(input: $input) {
    products {
        id
		name
		brand
		gallery
		inStock
		prices{
			currency{
				label
				symbol
			}
			amount
		}
		attributes{
            id
            name
            type
            items{
                displayValue
                value
                id
            } 
        }
    }
  }
}`, {
	options: (props: any) => ({
		variables: {
			input: {
				title: props.name
			}
		}
	})
});

export const getProduct = () => graphql(gql`
query getProduct($id: String!) {
  product(id: $id) {
    id
    name
    gallery
    inStock
    description
    category
    attributes{
      id
      name
      type
      items{
        displayValue
        value
        id
      }
    }
    prices{
      currency{
        label
        symbol
      }
      amount
    }
    brand
  }
}`, {
	options: (props: any) => {
		const { id } = props.params;
		return ({
			variables: {
				id
			},
		})
	}
});
