import type { Route as Rt } from "./+types/login";
export function meta({}: Rt.MetaArgs) {
	return [
		{ title: 'AGRI-BOT - "Login"' },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "~/components/ui/input";
import { useAuth } from "~/context/auth";
import RequestHandler from "~/lib/utilities/RequestHandler";

export default function LoginPage() {
	const { isAuthenticated, login } = useAuth();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (!email || !password) {
			setError("Please enter both email and password.");
			return;
		}
		if (email === "admin" && password === "admin") {
			setError("");
			login();
			navigate("/");
		} else {
			setError("Invalid email or password.");
		}
	};

	const test = async () => {
		const request = await RequestHandler.fetchData("get", "test");
		alert(JSON.stringify(request));
	};

	useEffect(() => {
		test();
	}, []);

	return (
		<>
			{!isAuthenticated ? (
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
									onChange={(e) =>
										setPassword(e.target.value)
									}
									className="p-2 bg-gray-800 text-white rounded-lg border-0"
									placeholder="Enter your password"
									required
								/>
							</div>

							{error && (
								<p className="text-red-500 text-sm mt-2">
									{error}
								</p>
							)}

							<button
								type="submit"
								className="w-full p-2 cursor-pointer bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
							>
								Login
							</button>
						</form>
					</div>
				</div>
			) : null}
		</>
	);
}
