import type { Route as Rt } from "./+types/accounts";
export function meta({}: Rt.MetaArgs) {
	return [
		{ title: 'AGRI-BOT - "Accounts"' },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountHeader from "~/components/accounts/accountsheader";
import AccountsTable from "~/components/accounts/accountstable";
import AccountsPaginator from "~/components/accounts/accountspaginator";

interface User {
	id: number;
	name: string;
	role: string;
	model: string;
	config: string;
}

export default function AccountsPage() {
	const [showAdmins, setShowAdmins] = useState(false);
	const [selectedUser, setSelectedUser] = useState<User | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;

	const [searchTerm, setSearchTerm] = useState("");

	const users: User[] = [
		{
			id: 1,
			name: "John Doe",
			role: "Admin",
			model: "-----",
			config: "Custom",
		},
		{
			id: 2,
			name: "Jane Smith",
			role: "User",
			model: "ModelV1.0.1",
			config: "Standard",
		},
		{
			id: 3,
			name: "Alice Johnson",
			role: "Admin",
			model: "-----",
			config: "Advanced",
		},
		{
			id: 4,
			name: "Bob Brown",
			role: "User",
			model: "ModelV1.0.1",
			config: "Basic",
		},
		{
			id: 5,
			name: "Charlie White",
			role: "Admin",
			model: "-----",
			config: "Premium",
		},
		{
			id: 6,
			name: "Dave Green",
			role: "User",
			model: "ModelV1.0.1",
			config: "Standard",
		},
	];

	const filteredUsers = showAdmins
		? users.filter((u) => u.role === "Admin")
		: users;
	const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
	const paginatedUsers = filteredUsers.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const handleFilterChange = () => {
	};

	return (
		<div className="bg-gray-950 text-white rounded-b-3xl">
			<div className="p-6 space-y-3">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
				>
					<AccountHeader
						showAdmins={showAdmins}
						searchTerm={""}
						setSearchTerm={setSearchTerm}
						handleFilterChange={handleFilterChange}
						setShowAdmins={setShowAdmins}
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
				>
					<AccountsTable
						paginatedUsers={paginatedUsers}
						setSelectedUser={setSelectedUser}
					/>
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
