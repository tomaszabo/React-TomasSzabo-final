import React, {useContext} from "react";
import {CartContext} from "../context/CartContext";
import "../styles/carrito.css"; // Importa tu archivo de estilos
import { Button } from "@mui/material";

const Carrito = () => {
	const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

	const handleVaciar = () => {
		vaciarCarrito();
	};

	return (
		<div className="container">
			<h1 className="main-title">Carrito</h1>

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
					<Button onClick={handleVaciar} variant="contained">Vaciar</Button>
				</div>
			) : (
				<h2>El carrito está vacío :(</h2>
			)}
		</div>
	);
};

export default Carrito;
