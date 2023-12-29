import ItemList from "./ItemList";
import Spinner from "./Spinners";
import useFirebaseData from "../hook/useFirebaseData";
import {useParams} from "react-router-dom";
import {Container} from "@mui/material";

const ItemListContainer = () => {
	const category = useParams().category;
	const itemId = null;
	const {data, loading} = useFirebaseData("products", category, itemId);

	return (
		<Container>
			{category ? <h1>{category}</h1> : <h1>Productos</h1>}
			{loading && <Spinner />}
			<ItemList products={data} />
		</Container>
	);
};

export default ItemListContainer;
