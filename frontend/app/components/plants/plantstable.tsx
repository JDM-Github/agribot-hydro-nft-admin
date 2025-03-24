import { Table } from "~/components/ui/table";
import { Button } from "~/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PlantsTable({
	paginatedPlants,
	setExpandedPlant,
	expandedPlant,
}: {
	paginatedPlants: any[];
	setExpandedPlant: any,
    expandedPlant: any
}) {
	return (
		<>
			<Table className="w-full bg-gray-900 text-white rounded-lg overflow-hidden table-fixed">
				<thead>
					<tr className="border-b border-gray-700 text-gray-400 bg-gray-800">
						<th className="p-3 text-left w-[15%] truncate">
							Plant Name
						</th>
						<th className="p-3 text-left w-[30%] hidden lg:flex">
							Description
						</th>
						<th className="p-3 text-left w-[10%] truncate">
							Confidence
						</th>
						<th className="p-3 text-left w-[15%] truncate">
							Created At
						</th>
						<th className="p-3 text-left w-[15%] truncate">
							Updated At
						</th>
						<th className="p-3 text-left w-[15%] truncate">
							Model Version
						</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-800 min-h-[100px]">
					{paginatedPlants.length > 0 ? (
						paginatedPlants.map((plant) => (
							<>
								<tr
									key={plant.id}
									className="hover:bg-gray-800"
								>
									<td className="p-3 truncate">
										<span className="flex items-center gap-3">
											<img
												src={plant.image}
												alt={plant.name}
												className="w-10 h-10 object-cover rounded-full shadow-lg"
											/>

											{plant.name}
										</span>
									</td>
									<td className="p-3 text-gray-300 truncate max-w-[200px] hidden lg:flex">
										{plant.description}
									</td>
									<td className="p-3 text-green-400 truncate">
										{plant.confidence}%
									</td>
									<td className="p-3 text-blue-400 truncate">
										{plant.createdAt}
									</td>
									<td className="p-3 text-yellow-400 truncate">
										{plant.updatedAt}
									</td>
									<td className="p-3 text-purple-400 flex justify-between items-center">
										{plant.modelVersion}
										<Button
											variant="ghost"
											size="sm"
											className="hover:bg-gray-600 hover:text-white"
											onClick={() =>
												setExpandedPlant(
													expandedPlant === plant.id
														? null
														: plant.id
												)
											}
										>
											{expandedPlant === plant.id ? (
												<ChevronUp size={16} />
											) : (
												<ChevronDown size={16} />
											)}
										</Button>
									</td>
								</tr>
								{expandedPlant === plant.id && (
									<tr className="bg-gray-950 border-gray-800 border">
										<td
											colSpan={
												window.innerWidth < 800 ? 5 : 6
											}
											className="p-3"
										>
											<div className="space-y-2">
												<p className="text-gray-400">
													<strong className="text-green-300">
														Diseases:
													</strong>{" "}
													{plant.diseases.length > 0
														? plant.diseases.join(
																", "
														  )
														: "None"}
												</p>
												<p className="text-gray-400">
													<strong className="text-yellow-300">
														Recommended Spray:
													</strong>{" "}
													{plant.recommendedSpray
														.length > 0
														? plant.recommendedSpray.join(
																", "
														  )
														: "None"}
												</p>
												<p className="text-gray-400">
													<strong className="text-purple-300">
														Dataset Link:
													</strong>{" "}
													<a
														href={plant.datasetLink}
														target="_blank"
														rel="noopener noreferrer"
														className="text-blue-400 hover:underline"
													>
														{plant.datasetLink
															? "View Dataset"
															: "No Link Available"}
													</a>
												</p>
											</div>
										</td>
									</tr>
								)}
							</>
						))
					) : (
						<tr>
							<td
								colSpan={window.innerWidth < 800 ? 5 : 6}
								className="p-3 text-center text-gray-500"
							>
								No plants found
							</td>
						</tr>
					)}
				</tbody>
			</Table>
		</>
	);
}