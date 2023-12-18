import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import styles from "../src/styles/index.module.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter className={styles} >
		<App />
	</BrowserRouter>
);
