const setTime = () => {
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});
};
export default setTime;
