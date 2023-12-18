import {NavLink} from "react-router-dom";
import CartWidget from "./Cartwidget";

import styles from "../styles/NavBar.module.css";

function NavBar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarLogo}>
				<h5>ToMarket</h5>
			</div>
			<ul className={styles.navbarLinks}>
				<NavLink to="/">
					<span>Home</span>
				</NavLink>
				<NavLink to="/">
					<span>Productos</span>
				</NavLink>
				<NavLink to="/" className={styles.dd}>
					<span>Servicios</span>
				</NavLink>
				<NavLink to="/contact">
					<span>Contacto</span>
				</NavLink>
			</ul>
			<div className={styles.navbarCart}>
				<NavLink to="/">
					<CartWidget count={3} />
				</NavLink>
			</div>
		</nav>
	);
}

export default NavBar;
