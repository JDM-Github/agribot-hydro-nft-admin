import type { Route as Rt } from "./+types/login";
import { useState } from "react";
import { redirect, useNavigate } from "react-router";
import { Input } from "~/components/ui/input";
import { useAuth } from "~/context/auth";
import RequestHandler from "~/lib/utilities/RequestHandler";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

export function meta({}: Rt.MetaArgs) {
	return [
		{ title: 'AGRI-BOT - "Login"' },
		{ name: "description", content: "Welcome to React Router!" },
	];
}
export function loader({ request }: { request: Request }) {
	const cookieHeader = request.headers.get("cookie");
	const token = cookieHeader
		?.split("; ")
		.find((row) => row.startsWith("token="))
		?.split("=")[1]
		?.trim();
	if (!token) {
		console.log("No token found, redirecting to login...");
		return null;
	}
	throw redirect("/");
}

export default function LoginPage() {
	const { login } = useAuth();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		if (!email || !password) {
			setError("Please enter both email and password.");
			setLoading(false);
			return;
		}
		try {
			const response = await RequestHandler.fetchData(
				"post",
				"admin/login",
				{
					username: email,
					password: password,
				}
			);
			if (!response.success) {
				setError(response.message || "Invalid email or password.");
				toast.error(response.message || "Invalid credentials");
				setLoading(false);
				return;
			}
			localStorage.setItem("user", JSON.stringify(response.user));
			Cookies.set("token", response.token, {
				expires: 1 / 24,
				path: "/",
				secure: true,
				sameSite: "Strict",
			});
			login();
			toast.success("Login successful!");
			setTimeout(() => navigate("/"), 1500);
		} catch (error: any) {
			console.error("Login error:", error);
			setError("Something went wrong. Please try again.");
			toast.error("Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<ToastContainer position="top-right" autoClose={2000} />
			<div className="relative min-h-screen flex items-center justify-center text-white">
				<div className="w-full max-w-sm p-8 bg-gradient-to-b from-gray-900 to-transparent rounded-lg shadow-lg">
					<h1 className="text-4xl font-bold text-center mb-6">
						<img
							src="/LOGO TEXT.webp"
							alt="Logo"
							className="w-full h-full"
						/>
					</h1>

					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="flex flex-col">
							<label
								htmlFor="email"
								className="text-sm font-medium mb-1"
							>
								Email
							</label>
							<Input
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="p-2 bg-gray-800 text-white rounded-lg border-0"
								placeholder="Enter your email"
								required
								disabled={loading}
							/>
						</div>

						<div className="flex flex-col">
							<label
								htmlFor="password"
								className="text-sm font-medium mb-1"
							>
								Password
							</label>
							<Input
								id="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="p-2 bg-gray-800 text-white rounded-lg border-0"
								placeholder="Enter your password"
								required
								disabled={loading}
							/>
						</div>

						{error && (
							<p className="text-red-500 text-sm mt-2">{error}</p>
						)}

						<button
							type="submit"
							className="w-full p-2 cursor-pointer bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex justify-center items-center"
							disabled={loading}
						>
							{loading ? (
								<span className="animate-spin mr-2 border-2 border-t-transparent border-white rounded-full w-5 h-5"></span>
							) : (
								"Login"
							)}
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
