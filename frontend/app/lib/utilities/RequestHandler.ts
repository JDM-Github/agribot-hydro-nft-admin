export default class RequestHandler {
	static development = import.meta.env.MODE === "development";
	static baseURL = RequestHandler.development
		? import.meta.env.VITE_DEVELOPMENT_URL
		: import.meta.env.VITE_DEPLOYMENT_URL;
	static apiLink = ".netlify/functions/api";

	static async fetchData(
		method: string,
		link: string,
		requestData: Record<string, any> | FormData = {}, 
		headers: Record<string, string> = {},
		callback: ((error: string | null, data?: any) => void) | null = null
	) {
		let url = `${RequestHandler.baseURL}/${RequestHandler.apiLink}/${link}`;

		const options: RequestInit = {
			method: method.toUpperCase(),
		};

		const isClient = typeof window !== "undefined";
		const token = isClient ? localStorage.getItem("authToken") : null;

		if (token) {
			headers["Authorization"] = `Bearer ${token}`;
		}

		const isFormData = requestData instanceof FormData;

		if (!isFormData) {
			options.headers = {
				"Content-Type": "application/json",
				...headers,
			};
			if (
				method.toLowerCase() !== "get" &&
				method.toLowerCase() !== "head"
			) {
				options.body = JSON.stringify(requestData);
			}
		} else {
			options.body = requestData; 
		}

		console.log(url);
		console.log(options);

		try {
			const response = await fetch(url, options);
			const responseData = await response.json();

			if (!response.ok) {
				throw new Error(
					responseData.message ||
						`HTTP error! Status: ${response.status}`
				);
			}

			if (callback) callback(null, responseData);
			return responseData;
		} catch (error: any) {
			console.error("Fetch error:", error);
			if (callback)
				callback(
					error.message ||
						"Something went wrong. Please try again later.",
					undefined
				);
			return {
				success: false,
				message: error.message || "An error occurred",
				baseURL: RequestHandler.baseURL,
				url,
			};
		}
	}
}
