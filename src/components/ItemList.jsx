import Item from "./Item";

import styles from "../styles/itemList.module.css";

const ItemList = ({products}) => {
	return (
		<div className={styles.itemContainer}>
			{products &&
				products.length > 0 &&
				products.map((product) => {
					return <Item key={product.id} product={product} />;
				})}
		</div>
	);
};

export default ItemList;
