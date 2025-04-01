import { redirect } from "react-router";
import jwt from "jsonwebtoken";

const JWT_SECRET = "jwt_secret";

export async function loader({ request }: { request: Request }) {
	const cookieHeader = request.headers.get("cookie");
	const url = new URL(request.url);
	const pathname = url.pathname;

	const token = cookieHeader
		?.split("; ")
		.find((row) => row.startsWith("token="))
		?.split("=")[1]
		?.trim();

	if (!token) {
		console.log("No token found, redirecting to login...");
		throw redirect("/login");
	}

	try {
		const decoded = jwt.verify(token, JWT_SECRET);
		console.log("Token is valid:", decoded);
	} catch (error: any) {
		console.error("Invalid or expired token:", error.message);
		throw redirect("/login");
	}

	if (pathname === "/login") {
		throw redirect("/");
	}
	return null;
}
