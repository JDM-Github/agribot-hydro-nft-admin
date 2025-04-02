import { Home, Search, Settings, Bell } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Header() {
	const [currentPage, setCurrentPage] = useState("Dashboard");
	const [showNotifications, setShowNotifications] = useState(false);
	const notificationRef = useRef<HTMLDivElement>(null);

	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}

		const handleClickOutside = (event: MouseEvent) => {
			if (
				notificationRef.current &&
				!notificationRef.current.contains(event.target as Node)
			) {
				setShowNotifications(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			<header className="w-full bg-green-900/20 text-white px-4 py-3 flex items-center justify-between shadow-md">
				<div className="flex items-center space-x-3">
					<div className="p-2 bg-green-900 rounded-lg">
						<Home size={20} className="text-green-400" />
					</div>
					<span className="text-lg font-semibold">{currentPage}</span>
				</div>

				<div className="flex items-center space-x-3 md:space-x-5">
					<div className="hidden md:block">
						<input
							type="text"
							placeholder="Search..."
							className="bg-gray-800 text-white text-sm px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
						/>
					</div>
					<div className="p-2 hidden md:block bg-gray-800 rounded-lg cursor-pointer hover:bg-green-800 transition">
						<Search size={20} />
					</div>

					<NavLink
						to="/settings"
						className="p-2 bg-gray-800 rounded-lg cursor-pointer hover:bg-green-800 transition"
					>
						<Settings size={20} />
					</NavLink>

					<div
						className="relative p-2 bg-gray-800 rounded-lg cursor-pointer hover:bg-green-700 transition duration-200 ease-in-out shadow-md"
						onClick={() => setShowNotifications(!showNotifications)}
						ref={notificationRef}
					>
						<Bell size={20} className="text-white" />
						<span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white px-1.5 py-0.5 rounded-full shadow-sm">
							3
						</span>

						{showNotifications && (
							<div className="absolute right-0 mt-2 w-72 bg-gray-900 shadow-xl rounded-lg p-4 text-white text-sm border border-gray-700 z-50 animate-fade-in">
								<h3 className="text-md font-semibold border-b border-gray-700 pb-2 mb-2">
									Notifications
								</h3>
								<ul className="space-y-2">
									<li className="flex items-center gap-2 p-3 bg-gradient-to-r from-transparent via-gray-800 to-transparent rounded-lg hover:bg-gradient-to-r hover:from-transparent hover:via-gray-700 hover:to-transparent transition duration-150 cursor-pointer">
										<span>New message from John Doe</span>
									</li>
									<li className="flex items-center gap-2 p-3 bg-gradient-to-r from-transparent via-gray-800 to-transparent rounded-lg hover:bg-gradient-to-r hover:from-transparent hover:via-gray-700 hover:to-transparent transition duration-150 cursor-pointer">
										<span>
											Your meeting starts in 30 minutes
										</span>
									</li>
									<li className="flex items-center gap-2 p-3 bg-gradient-to-r from-transparent via-gray-800 to-transparent rounded-lg hover:bg-gradient-to-r hover:from-transparent hover:via-gray-700 hover:to-transparent transition duration-150 cursor-pointer">
										<span>
											Profile updated successfully
										</span>
									</li>
								</ul>
							</div>
						)}
					</div>

					{user &&
						(user.profileImage ? (
							<img
								src={user.profileImage}
								alt="User Profile"
								className="w-10 h-10 rounded-full object-cover border-2 border-green-300"
							/>
						) : (
							<div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full text-white font-semibold">
								{user.fullName
									.split(" ")
									.map((n: any) => n[0])
									.join("")
									.toUpperCase()}
							</div>
						))}
				</div>
			</header>
			<div className="w-full bg-green-900/50 py-2 px-6 text-sm text-green-500/50">
				Dashboard
			</div>
		</>
	);
}
