import {Link} from "react-router-dom";
import styles from "../styles/item.module.css";

const Item = ({product}) => {
	return (
		<div className={styles.item}>
			<img className={styles.itemImage} src={product.image} alt="Imagen" />
			<div className={styles.itemContent}>
				<h2 className={styles.itemTitle}>{product.title}</h2>- ${product.price}
				<p className={styles.itemDescription}>{product.description}</p> 
				<Link to="https:/fakestoreapi.com/products" className={styles.itemLink}>
					Ver más
				</Link>
				<button>
					<p>Comprar</p>
				</button>
			</div>
		</div>
	);
};

export default Item;
