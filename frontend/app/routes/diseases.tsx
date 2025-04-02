import type { Route as Rt } from "./+types/diseases";
export function meta({}: Rt.MetaArgs) {
    return [
        { title: 'AGRI-BOT - "Diseases"' },
        { name: "description", content: "Welcome to React Router!" },
    ];
}
import { motion } from "framer-motion";
import { useState } from "react";
import RequestHandler from "~/lib/utilities/RequestHandler";
import DiseaseHeader from "~/components/diseases/diseaseheader";
import DiseasesTable from "~/components/diseases/diseasestable";
import Paginator from "~/components/pagination";

export async function loader() {
    try {
        const response = await RequestHandler.fetchData("get", "disease/get-all");
        if (!response.success) {
            throw new Error(response.message || "Failed to fetch users");
        }
        return { diseases: response.diseases };
    } catch (error: any) {
        console.error("Fetch error:", error);
        return { diseases: [] };
    }
}

export default function DiseasePage({ loaderData }: Rt.ComponentProps) {    
    const diseases = loaderData.diseases || [];
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedPlant, setExpandedPlant] = useState<number | null>(null);
    const itemsPerPage = 10;

    const filteredDiseases = searchTerm
        ? diseases.filter((p: any) =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : diseases;

    const totalPages = Math.ceil(filteredDiseases.length / itemsPerPage);
    const paginatedDiseases = filteredDiseases.slice(
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
					<DiseaseHeader
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
				>
					<DiseasesTable
						paginatedDiseases={paginatedDiseases}
						setExpandedDisease={setExpandedPlant}
						expandedDisease={expandedPlant}
					/>
					<Paginator
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						totalPages={totalPages}
						pageLength={paginatedDiseases.length}
					/>
				</motion.div>
			</div>
		</div>
	);
}
