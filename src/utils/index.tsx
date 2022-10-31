import { useParams } from "react-router-dom";
import React from "react";

function withParams(Component: React.JSXElementConstructor<any>) {
	return (props: any) => <Component {...props} params={useParams()}/>
}

export default withParams;
