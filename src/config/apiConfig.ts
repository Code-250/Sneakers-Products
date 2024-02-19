import axios from "axios"

const axiosInstance = axios.create({
	baseURL:
		process.env
			.NEXT_PUBLIC_API_BASE_URL,
	headers: {
		"Accepted": "appication/json",
		"Content-Type": "application/json",
	},
	// withCredentials: true
})

// axiosInstance.interceptors.request.use(
// 	(config) => {
// 		console.log(
// 			config,
// 			"these are the values",
// 		)
// 		const user = JSON.parse(
// 			localStorage.getItem("au") ||
// 				"{}",
// 		)

// 		if (user) {
// 			console.log(user, "this user")
// 			config.headers.authorization =
// 				user.token
// 			config.headers.apiKey =
// 				process.env.NEXT_PUBLIC_API_KEY
// 		}
// 		return config
// 	},
// 	(error) => Promise.reject(error),
// )

export default axiosInstance
