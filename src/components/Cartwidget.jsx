import {ShoppingCart} from "@mui/icons-material";
import {Badge} from "@mui/material";

export const CartWidget = ({count}) => {
	return (
		<Badge color="primary" badgeContent={count}>
			<ShoppingCart />
		</Badge>
	);
};

export default CartWidget;
