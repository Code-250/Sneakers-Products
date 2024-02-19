import { AxiosRequestConfig } from "axios"
import http from "../config/apiConfig"

type Props = {
	path: string /**Path to the target endpoint eg:/api/news */
	method?:
		| "GET"
		| "POST"
		| "PATCH"
		| "DELETE"
		| "PUT"
	data?: any /**Data to send with request in the body*/
	options?: AxiosRequestConfig
}

export default async function apiService({
	path,
	method = "GET",
	data,
	options,
}: Props) {
	try {
		let response
		switch (method) {
			case "PATCH":
				response = await http.patch(
					path,
					data,
					{
						...options,
					},
				)
				return response.data
			case "GET":
				response = await http.get(
					path,
					{
						...options,
					},
				)
				return response.data
			case "POST":
				response = await http.post(
					path,
					data,
					{
						...options,
					},
				)
				return response.data
			case "DELETE":
				response = await http.delete(
					path,
					{
						...options,
					},
				)
				return response.data
			default:
				return {
					error: true,
					status: 501,
					message:
						"Http method not supported",
				}
		}
	} catch (error: any) {
		return {
			error: true,
			status:
				error.response &&
				error.response.data &&
				error.response.data.status,
			message:
				error.message &&
				error.message.includes(
					"Network Error",
				)
					? "Connection failed, please check internet connection or contact administrator"
					: error.response?.data
							.message ||
					  error.response?.data,
		}
	}
}
