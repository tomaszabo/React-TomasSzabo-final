import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Error404 from "./views/Error404";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/categoty/:id" element={<Home />} />
				<Route path="/items/:id" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</>
	);
}

export default App;
