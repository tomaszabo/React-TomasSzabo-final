import {useState, useEffect} from "react";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../firebase/config";

const useFirebaseData = (collectionName, category) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				let products = collection(db, collectionName);
				let filter = products;

				if (category) {
					filter = query(products, where("category", "==", category));
				}

				const produFire = await getDocs(filter);
				const items = produFire.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setData(items);
				setLoading(false);
				console.log(data);
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoading(false);
			}
		};

		fetchData();
	}, [collectionName, category]);

	return {data, loading};
};

export default useFirebaseData;
