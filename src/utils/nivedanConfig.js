import nivedan from 'nivedan';
nivedan.defaultConfig({
	baseURL: 'https://api.github.com/users/',
	errorExpand: true,
	errorMessageKey: 'error_message',
	dataOnly: true,
});

nivedan.middleware.request.use(
	function(config) {
		const newConfig = config;
		return newConfig;
	},
	function(error) {
		return Promise.reject(error);
	}
);

nivedan.middleware.response.use(
	(response) => response,
	(err) => {
		if (err.status === 401) {
			window.location.href = '/login';
		}
		return Promise.reject(err);
	}
);
window.nivedan = nivedan;
export default nivedan;
