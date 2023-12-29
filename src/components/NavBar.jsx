import {Link} from "react-router-dom";
import CartWidget from "./Cartwidget";
import {CartContext} from "../context/CartContext";
import {useContext} from "react";

import styles from "../styles/NavBar.module.css";

function NavBar() {
	const {cantidadEnCarrito} = useContext(CartContext);
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarLogo}>
				<Link to="/">
					<h4>ToMarket</h4>
				</Link>
			</div>
			<ul className={styles.navbarLinks}>
				<Link to="/">
					<span>Home</span>
				</Link>
				<Link to="/category/Mujeres">
					<span>Mujeres</span>
				</Link>
				<Link to="/category/Hombres">
					<span>Hombres</span>
				</Link>
				<Link to="/category/Electronica">
					<span>Electronica</span>
				</Link>
				<Link to="/category/Joyería">
					<span>Joyería</span>
				</Link>

				<Link to="/contact">
					<span>Contacto</span>
				</Link>
			</ul>
			<div className={styles.navbarCart}>
				<Link to="/carrito">
					<CartWidget count={cantidadEnCarrito()} />
				</Link>
			</div>
		</nav>
	);
}

export default NavBar;
