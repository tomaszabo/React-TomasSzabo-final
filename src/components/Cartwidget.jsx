import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {CartContext} from "../context/CartContext";
import {ShoppingCart} from "@mui/icons-material";
import {Badge} from "@mui/material";

export const CartWidget = ({}) => {
	const {cantidadEnCarrito} = useContext(CartContext);
	return (
		<Link to="/Carrito">
			<Badge color="primary" badgeContent={cantidadEnCarrito()}>
				<ShoppingCart />
			</Badge>
		</Link>
	);
};

export default CartWidget;
