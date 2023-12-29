import React from "react";
import "../styles/ItemCount.css"; // Importa tu archivo de estilos
import {Button, ButtonGroup} from "@mui/material";

const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {
	return (
		<div>
			<div className="item-count">
				<ButtonGroup size="large" aria-label="large button group">
					<Button onClick={handleRestar}>-</Button>
					<Button>{cantidad}</Button>
					<Button onClick={handleSumar}>+</Button>
				</ButtonGroup>
			</div>
			<Button variant="contained" onClick={handleAgregar}>
				Agregar al carrito
			</Button>
		</div>
	);
};

export default ItemCount;
