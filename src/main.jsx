import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import styles from "../src/styles/index.module.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<div className={styles}>
		<App />
	</div>
);
