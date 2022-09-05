import {graphql} from "@apollo/client/react/hoc";
import {gql} from "@apollo/client";
import Main from "./components/Main/Main";
import React from "react";

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
export const getProductOfCategory = () => graphql(gql`
query getCategory($input: CategoryInput) {
  category(input: $input) {
    name
    products {
        id
		name
		gallery
		prices{
			currency{
				label
				symbol
			}
			amount
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
