import {useEffect, useState} from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await new Promise((resolve) => {
					setTimeout(async () => {
						const res = await fetch(url);
						resolve(res.json());
					}, 2000);
				});

				setData(response);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:");
				setLoading(false);
			}
		};
		setLoading(true);
		fetchData();
	}, []);

	return {loading, data};
};
export default useFetch;
