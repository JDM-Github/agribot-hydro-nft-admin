import type { Route as Rt } from "./+types/accounts";
export function meta({}: Rt.MetaArgs) {
	return [
		{ title: 'AGRI-BOT - "Accounts"' },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

import { motion } from "framer-motion";
import { useState } from "react";
import AccountHeader from "~/components/accounts/accountsheader";
import AccountsTable from "~/components/accounts/accountstable";
import AccountsPaginator from "~/components/accounts/accountspaginator";
import RequestHandler from "~/lib/utilities/RequestHandler";
import type { User } from "~/helpers/types";

export async function loader() {
	try {
		const response = await RequestHandler.fetchData("get", "get-all-users");

		if (!response.success) {
			throw new Error(response.message || "Failed to fetch users");
		}

		return { users: response.users };
	} catch (error: any) {
		console.error("Fetch error:", error);
		return { users: [] };
	}
}

export default function AccountsPage({ loaderData }: Rt.ComponentProps) {
	const [showAdmins, setShowAdmins] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;

	const [searchTerm, setSearchTerm] = useState("");
	const users = loaderData.users;

	const filteredUsers = showAdmins
		? users.filter((u: User) => u.role === "Admin")
		: users.filter((u: User) => u.role !== "Admin");
	const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
	const paginatedUsers = filteredUsers.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);
	const handleFilterChange = () => {};

	return (
		<div className="bg-gray-950 text-white rounded-b-3xl min-h-screen flex flex-col items-center">
			<div className="p-6 space-y-3 w-full">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
				>
					<AccountHeader
						showAdmins={showAdmins}
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
						handleFilterChange={handleFilterChange}
						setShowAdmins={setShowAdmins}
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.5,
						delay: 0.5,
						ease: "easeOut",
					}}
				>
					<AccountsTable paginatedUsers={paginatedUsers} />
					<AccountsPaginator
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						totalPages={totalPages}
						paginatedUsers={paginatedUsers}
					/>
				</motion.div>
			</div>
		</div>
	);
}
