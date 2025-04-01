import { Table } from "~/components/ui/table";
import { Button } from "~/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import PlantDetails from "./plantsui";

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
						<th className="p-3 text-left truncate">Plant Name</th>
						<th className="p-3 text-left truncate">Confidence</th>
						{/* <th className="p-3 text-left truncate">Recall</th>
						<th className="p-3 text-left truncate">mAP50</th>
						<th className="p-3 text-left truncate">mAP50-95</th> */}
						<th className="p-3 text-left truncate">Created At</th>
						<th className="p-3 text-left w-auto truncate">
							Updated At
						</th>
						<th className="p-3 text-left w-auto truncate">
							Actions
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
									<td className="p-3 text-green-400 truncate">
										{plant.confidence}%
									</td>
									{/* <td className="p-3 text-green-400 truncate">
										{plant.recall}%
									</td>
									<td className="p-3 text-green-400 truncate">
										{plant.mAP50}%
									</td>
									<td className="p-3 text-green-400 truncate">
										{plant.mAP50_95}%
									</td> */}
									<td className="p-3 text-blue-400 truncate">
										{new Date(
											plant.createdAt
										).toLocaleDateString()}
									</td>
									<td className="p-3 text-yellow-400 truncate">
										{new Date(
											plant.updatedAt
										).toLocaleDateString()}
									</td>

									<td className="p-3 text-purple-400 flex justify-between items-center">
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
												<>
													{"View "}
													<ChevronUp size={16} />
												</>
											) : (
												<>
													{"View "}
												<ChevronDown size={16} />
												</>
											)}
										</Button>
									</td>
								</tr>
								{expandedPlant === plant.id && (
									<PlantDetails plant={plant} />
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