import { Table } from "~/components/ui/table";
import UserDetailSheet from "~/components/accounts/userdetail";

export default function AccountsTable({ paginatedUsers, setSelectedUser }: { paginatedUsers: any[], setSelectedUser: any }) {
	return (
		<>
			<Table className="w-full bg-gray-900 text-white rounded-lg overflow-hidden table-fixed">
				<thead>
					<tr className="border-b border-gray-700 text-gray-400 bg-gray-800">
						<th className="p-3 text-left w-1/4">Name</th>
						<th className="p-3 text-left w-1/4">Role</th>
						<th className="p-3 text-left w-1/4">Model</th>
						<th className="p-3 text-left w-1/4">Action</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-800 min-h-[100px]">
					{paginatedUsers.length > 0 ? (
						paginatedUsers.map((user: any) => (
							<tr key={user.id} className="hover:bg-gray-800">
								<td className="p-3 flex items-center space-x-3 truncate">
									<div className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full text-white font-semibold">
										{user.name
											.split(" ")
											.map((n: any) => n[0])
											.join("")
											.toUpperCase()}
									</div>
									<span>{user.name}</span>
								</td>

								<td className="p-3 text-blue-400 truncate">
									{user.role}
								</td>
								<td className="p-3 text-green-400 truncate">
									{user.model}
								</td>
								<td className="p-3 truncate">
									<UserDetailSheet
										user={user}
										setSelectedUser={setSelectedUser}
									/>
								</td>
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
		</>
	);
}
