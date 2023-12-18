import {ClimbingBoxLoader} from "react-spinners";

import styles from "../styles/spineer.module.css";

function Spinner() {
	return (
		<div className={styles.spinner}>
			<ClimbingBoxLoader color="#36d7b7" />
		</div>
	);
}

export default Spinner;
