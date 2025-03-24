import type { Route as Rt } from "./+types/plants";
export function meta({}: Rt.MetaArgs) {
	return [
		{ title: 'AGRI-BOT - "Plants"' },
		{ name: "description", content: "Welcome to React Router!" },
	];
}
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlantsTable from "~/components/plants/plantstable";
import PlantsPaginator from "~/components/plants/plantspaginator";
import PlantHeader from "~/components/plants/plantheader";

interface Plant {
	id: number;
	image: string;
	name: string;
	description: string;
	confidence: number;
	createdAt: string;
	updatedAt: string;
	modelVersion: string;
	diseases: string[];
	recommendedSpray: string[];
	datasetLink: string;
}

export default function PlantsPage() {

	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [expandedPlant, setExpandedPlant] = useState<number | null>(null);
	const itemsPerPage = 10;

	const plants: Plant[] = [
		{
			id: 1,
			image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg",
			name: "Tomato",
			description:
				"A red, juicy fruit commonly mistaken for a vegetable.",
			confidence: 98.5,
			createdAt: "2025-03-01",
			updatedAt: "2025-03-05",
			modelVersion: "v1.2.0",
			diseases: ["Late Blight", "Early Blight"],
			recommendedSpray: ["Copper Fungicide", "Neem Oil"],
			datasetLink:
				"https://www.kaggle.com/datasets/alexattia/plant-village",
		},
		{
			id: 2,
			image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg",
			name: "Lettuce",
			description:
				"A leafy green vegetable used in salads and sandwiches.",
			confidence: 97.8,
			createdAt: "2025-02-20",
			updatedAt: "2025-03-03",
			modelVersion: "v1.1.8",
			diseases: ["Downy Mildew", "Lettuce Mosaic Virus"],
			recommendedSpray: ["Bordeaux Mixture", "Insecticidal Soap"],
			datasetLink: "https://data.mendeley.com/datasets/9wvz4bkp4n/2",
		},
		{
			id: 3,
			image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg",
			name: "Kale",
			description: "A nutrient-rich leafy green vegetable.",
			confidence: 96.2,
			createdAt: "2025-02-15",
			updatedAt: "2025-03-01",
			modelVersion: "v1.1.5",
			diseases: ["Black Rot", "Powdery Mildew"],
			recommendedSpray: ["Sulfur Spray", "Copper Hydroxide"],
			datasetLink:
				"https://www.kaggle.com/datasets/vipoooool/new-plant-diseases-dataset",
		},
		{
			id: 4,
			image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg",
			name: "Spinach",
			description: "A dark green leafy vegetable rich in iron.",
			confidence: 95.5,
			createdAt: "2025-01-28",
			updatedAt: "2025-02-25",
			modelVersion: "v1.0.9",
			diseases: ["Cladosporium Leaf Spot", "Downy Mildew"],
			recommendedSpray: ["Chlorothalonil", "Copper Fungicide"],
			datasetLink: "https://github.com/spMohanty/PlantVillage-Dataset",
		},
		{
			id: 5,
			image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg",
			name: "Basil",
			description: "A fragrant herb commonly used in cooking.",
			confidence: 94.7,
			createdAt: "2025-01-12",
			updatedAt: "2025-02-10",
			modelVersion: "v1.0.7",
			diseases: ["Basil Downy Mildew", "Fusarium Wilt"],
			recommendedSpray: ["Phosphorous Acid", "Bacillus Subtilis"],
			datasetLink:
				"https://www.kaggle.com/datasets/abdallahalidev/plant-disease-detection",
		},
		{
			id: 6,
			image: "",
			name: "Bok Choy",
			description: "A type of Chinese cabbage used in Asian cuisine.",
			confidence: 93.9,
			createdAt: "2025-01-05",
			updatedAt: "2025-02-02",
			modelVersion: "v1.0.5",
			diseases: ["Clubroot", "Alternaria Leaf Spot"],
			recommendedSpray: ["Lime Treatment", "Mancozeb"],
			datasetLink: "https://data.mendeley.com/datasets/tywbtsjrjv/1",
		},
	];

	const filteredPlants = searchTerm
		? plants.filter((p) =>
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
