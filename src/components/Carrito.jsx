import {useContext} from "react";
import {CartContext} from "../context/CartContext";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

import "../styles/carrito.css";

const Carrito = () => {
	const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

	const handleVaciar = () => {
		vaciarCarrito();
	};

	return (
		<div className="container-carrito">
			<h1 className="carrito-title">Carrito</h1>

			{carrito.map((prod) => (
				<div className="cart-item" key={prod.id}>
					<div className="cart-item-info">
						<img src={prod.image} alt={prod.title} />
						<div>
							<h3>{prod.title}</h3>
							<p className="cart-item-price">Precio unit: ${prod.price}</p>
							<p>Precio total: ${prod.price * prod.cantidad}</p>
							<p>Cant: {prod.cantidad}</p>
							
						</div>
					</div>
				</div>
			))}

			{carrito.length > 0 ? (
				<div className="cart-summary">
					<h2>Precio total: ${precioTotal()}</h2>
					<Button onClick={handleVaciar} variant="outlined">
						Vaciar
					</Button>
					<Link to="/checkout">
						<Button variant="contained">Finalizar compra</Button>
					</Link>
				</div>
			) : (
				<h2>El carrito está vacío</h2>
			)}
		</div>
	);
};

export default Carrito;
