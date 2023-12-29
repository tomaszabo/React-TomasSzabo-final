import NavBar from "./components/NavBar";

import Home from "./views/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito";
import Error404 from "./views/Error404";
import Contact from "./views/Contact";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CartProvider} from "./context/CartContext";

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/category/:category" element={<ItemListContainer />} />
					<Route path="/items/:id" element={<ItemDetailContainer />} />
					<Route path="/Carrito" element={<Carrito />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
