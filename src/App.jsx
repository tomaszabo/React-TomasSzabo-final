import { Route, Routes} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import 	Home from "./views/Home";
import Contact from "./views/Contact";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	);
}

export default App;
