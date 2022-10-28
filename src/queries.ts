import {graphql} from "@apollo/client/react/hoc";
import {gql} from "@apollo/client";

export const getAllCategories = graphql(gql`
query {
		categories {
            name
        }
	}
`)

export const getAllCurrencies = graphql(gql`
query {
		currencies{
			label
            symbol
		}
	}
`)

export const getAllCurrenciesWithCategories = graphql(gql`
		query {
			categories {
                name
                products{
                    id
                }
            }
			
			currencies{
			label
            symbol
		}
		}
		`)
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
	options: (props: any) => ({
		variables: {
			id: props.params.id
		}
	})
});
