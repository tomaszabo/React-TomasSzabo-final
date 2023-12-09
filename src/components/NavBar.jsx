import {NavLink} from "react-router-dom";

function NavBar() {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<h5>ToMarket</h5>
			</div>
			<ul className="navbar-links">
				<NavLink to="/">
					<span>Home</span>
				</NavLink>
				<NavLink to="/">
					<span>Productos</span>
				</NavLink>
				<NavLink to="/">
					<span>Servicios</span>
				</NavLink>
				<NavLink to="/contact">
					<span>Contacto</span>
				</NavLink>
			</ul>
			<div className="navbar-cart">
				<NavLink to="/">
					<i className="nav-shopping-cart"></i> Carrito
				</NavLink>
			</div>
		</nav>
	);
}

export default NavBar;
