import {useEffect, useState} from "react";
import ItemList from "./ItemList";
import {Container} from "@mui/material";
import Spinner from "./Spinners";
import useFetch from "../hook/useFetch";

//"https://fakestoreapi.com/products"

const ItemListContainer = () => {
	
	const{loading, data} = useFetch("https://fakestoreapi.com/products")

	return (
		<Container>
			{loading && <Spinner />}
			<h1>Productos</h1>
			<ItemList products={data} />
		</Container>
	);
};

export default ItemListContainer;
