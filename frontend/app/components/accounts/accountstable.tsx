import { Table } from "~/components/ui/table";
import { Button } from "~/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function AccountsTable({
	paginatedUsers,
	showAdmins,
}: {
	paginatedUsers: any[];
	showAdmins: boolean;
}) {
	return (
		<div className="relative">
			<Table className="w-full bg-gray-900 text-white rounded-lg overflow-hidden table-fixed">
				<thead>
					<tr className="border-b border-gray-700 text-gray-400 bg-gray-800">
						<th className="p-3 text-left">Name</th>
						<th className="p-3 text-left">Role</th>
						{!showAdmins ? (
							<>
								<th className="p-3 text-left">Model</th>
								<th className="p-3 text-left">Action</th>
							</>
						) : (
							<>
								<th className="p-3 text-left">Email</th>
								<th className="p-3 text-left">Facebook</th>
							</>
						)}
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-800 min-h-[100px]">
					{paginatedUsers.length > 0 ? (
						paginatedUsers.map((user) => (
							<tr key={user.id} className="hover:bg-gray-800">
								<td className="p-3 flex items-center space-x-3 truncate">
									{user.profileImage ? (
										<img
											src={user.profileImage}
											alt={user.name}
											className="w-8 h-8 rounded-full object-cover"
										/>
									) : (
										<div className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full text-white font-semibold">
											{user.name
												.split(" ")
												.map((n: any) => n[0])
												.join("")
												.toUpperCase()}
										</div>
									)}
									<span>{user.name}</span>
								</td>

								<td className="p-3 text-blue-400 truncate">
									{user.role}
								</td>
								{!showAdmins ? (
									<>
										<td className="p-3 text-green-400 truncate">
											{user.model}
										</td>
										<td className="p-3 truncate">
											<Button
												size="sm"
												className="cursor-pointer flex items-center gap-2 bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
											>
												View <ChevronRight size={16} />
											</Button>
										</td>
									</>
								) : (
									<>
										<td className="p-3 text-green-400 truncate">
											{user.email}
										</td>
										<td className="p-3 text-yellow-400 truncate">
											{user.facebook}
										</td>
									</>
								)}
							</tr>
						))
					) : (
						<tr>
							<td
								colSpan={4}
								className="p-3 text-center text-gray-500"
							>
								No users found
							</td>
						</tr>
					)}
				</tbody>
			</Table>
		</div>
	);
}
