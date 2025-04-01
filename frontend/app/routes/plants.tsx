import type { Route as Rt } from "./+types/plants";
export function meta({}: Rt.MetaArgs) {
	return [
		{ title: 'AGRI-BOT - "Plants"' },
		{ name: "description", content: "Welcome to React Router!" },
	];
}
import { motion } from "framer-motion";
import { useState } from "react";
import PlantsTable from "~/components/plants/plantstable";
import PlantsPaginator from "~/components/plants/plantspaginator";
import PlantHeader from "~/components/plants/plantheader";
import RequestHandler from "~/lib/utilities/RequestHandler";

export async function loader() {
	try {
		const response = await RequestHandler.fetchData("get", "plant/get-all");
		if (!response.success) {
			throw new Error(response.message || "Failed to fetch users");
		}
		return { plants: response.plants };
	} catch (error: any) {
		console.error("Fetch error:", error);
		return { plants: [] };
	}
}

export default function PlantsPage({ loaderData }: Rt.ComponentProps) {
	const plants = loaderData.plants || [];
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [expandedPlant, setExpandedPlant] = useState<number | null>(null);
	const itemsPerPage = 10;

	const filteredPlants = searchTerm
		? plants.filter((p: any) =>
				p.name.toLowerCase().includes(searchTerm.toLowerCase()))
		: plants;

	const totalPages = Math.ceil(filteredPlants.length / itemsPerPage);
	const paginatedPlants = filteredPlants.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	return (
		<div className="bg-gray-950 text-white rounded-b-3xl">
			<div className="bg-gray-950 text-white rounded-b-3xl p-6 space-y-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
				>
					<PlantHeader
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
				>
					<PlantsTable
						paginatedPlants={paginatedPlants}
						setExpandedPlant={setExpandedPlant}
						expandedPlant={expandedPlant}
					/>
					<PlantsPaginator
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						totalPages={totalPages}
						paginatedPlants={paginatedPlants}
					/>
				</motion.div>
			</div>
		</div>
	);
}
