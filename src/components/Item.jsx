import {Link} from "react-router-dom";
import styles from "../styles/item.module.css";
import { Button } from "@mui/material";

const Item = ({product}) => {
	return (
		<div className={styles.item}>
			<img className={styles.itemImage} src={product.image} alt={product.title} />
			<div className={styles.itemContent}>
				<h2 className={styles.itemTitle}>{product.title}</h2>- ${product.price}
				<p className={styles.itemDescription}>{product.description}</p>
				<Link to={`/items/${product.id}`} className={styles.itemLink}>
					<Button variant="contained">Comprar</Button>
				</Link>
			</div>
		</div>
	);
};

export default Item;
