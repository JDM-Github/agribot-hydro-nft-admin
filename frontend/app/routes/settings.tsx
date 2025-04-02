import type { Route as Rt } from "./+types/settings";
export function meta({}: Rt.MetaArgs) {
    return [
        { title: 'AGRI-BOT - "Settings"' },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

import { useState } from "react";
import { motion } from "framer-motion";
import Profile from "~/components/settings/profile";
import Links from "~/components/settings/links";
import Logout from "~/components/settings/logout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AccountSettings() {
	const [selectedTab, setSelectedTab] = useState("profile");

	return (
		<>
			<ToastContainer position="top-right" autoClose={2000} />
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="w-6xl mx-auto p-6 text-white inline-block lg:flex"
			>
				<div className="w-80 h-auto bg-gray-900 p-4 rounded-lg shadow-lg space-y-4 flex-shrink-0">
					<h2 className="text-lg font-semibold border-b border-gray-700 pb-2">
						Settings
					</h2>
					<button
						onClick={() => setSelectedTab("profile")}
						className={`block w-full text-left px-4 py-2 rounded-lg transition ${
							selectedTab === "profile"
								? "bg-gray-700 text-white"
								: "text-gray-400 hover:bg-gray-800"
						}`}
					>
						Profile Account
					</button>
					<button
						onClick={() => setSelectedTab("links")}
						className={`block w-full text-left px-4 py-2 rounded-lg transition ${
							selectedTab === "links"
								? "bg-gray-700 text-white"
								: "text-gray-400 hover:bg-gray-800"
						}`}
					>
						Profile Links
					</button>
					<button
						onClick={() => setSelectedTab("logout")}
						className="block w-full text-left px-4 py-2 rounded-lg text-red-400 hover:bg-red-800 hover:text-white transition"
					>
						Logout
					</button>
				</div>

				<div className="flex-1 lg:ml-6">
					<Profile selectedTab={selectedTab} />
					<Links
						selectedTab={selectedTab}
						// handleChange={handleChange}
					/>
					<Logout selectedTab={selectedTab} />
				</div>
			</motion.div>
		</>
	);
}