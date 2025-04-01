import { redirect } from "react-router";

export function loader({ request }: { request: Request }) {
	const cookieHeader = request.headers.get("cookie");

	const token = cookieHeader
		?.split("; ")
		.find((row) => row.startsWith("token="))
		?.split("=")[1]
		?.trim();

	if (!token) {
		console.log("No token found, redirecting to login...");
		throw redirect("/login");
	}
	throw redirect("/");
}

export default function NotFound() {
	return <p>Redirecting...</p>;
}
