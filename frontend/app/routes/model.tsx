import type { Route as Rt } from "./+types/model";
export function meta({}: Rt.MetaArgs) {
	return [
		{ title: 'AGRI-BOT - "Model"' },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Preview from "~/components/model/preview";
import PlantScroll from "~/components/model/plantscroll";
import RobotComparison from "~/components/model/robotcomparison";
import Specifications from "~/components/model/specification";
import MaterialDialog from "~/components/model/materialdialog";

const models = [
	{ id: 1, name: "Model V1.0.0", description: "AI for plant detection" },
	{ id: 2, name: "Model V1.0.1", description: "Enhanced processing power" },
	{ id: 3, name: "Model V1.0.2", description: "Improved moisture sensors" },
	{ id: 4, name: "Model V1.1.0", description: "Extended battery life" },
	{ id: 5, name: "Model V2.0.0", description: "Next-gen AI model" },
];

const plants = [
	{
		id: 1,
		name: "Sunflower",
		src: "https://blog.lexmed.com/images/librariesprovider80/blog-post-featured-images/shutterstock_1896755260.jpg?sfvrsn=52546e0a_0",
		confidence: 95,
	},
	{
		id: 2,
		name: "Rose",
		src: "https://blog.lexmed.com/images/librariesprovider80/blog-post-featured-images/shutterstock_1896755260.jpg?sfvrsn=52546e0a_0",
		confidence: 88,
	},
	{
		id: 3,
		name: "Tulip",
		src: "https://blog.lexmed.com/images/librariesprovider80/blog-post-featured-images/shutterstock_1896755260.jpg?sfvrsn=52546e0a_0",
		confidence: 92,
	},
	{
		id: 4,
		name: "Lavender",
		src: "https://blog.lexmed.com/images/librariesprovider80/blog-post-featured-images/shutterstock_1896755260.jpg?sfvrsn=52546e0a_0",
		confidence: 89,
	},
	{
		id: 5,
		name: "Daisy",
		src: "https://blog.lexmed.com/images/librariesprovider80/blog-post-featured-images/shutterstock_1896755260.jpg?sfvrsn=52546e0a_0",
		confidence: 97,
	},
];

export default function ModelPage() {

	const [selectedModel, setSelectedModel] = useState(models[0]);
	const [showMaterials, setShowMaterials] = useState(false);

	const materialLinks = {
		"Aluminum Alloy": "https://en.wikipedia.org/wiki/Aluminium_alloy",
		"Carbon Fiber": "https://en.wikipedia.org/wiki/Carbon_fiber",
		"High-Density Plastic": "https://en.wikipedia.org/wiki/Thermoplastic",
		"Silicon-based Circuitry":
			"https://en.wikipedia.org/wiki/Integrated_circuit",
		"Lithium-Ion Battery":
			"https://en.wikipedia.org/wiki/Lithium-ion_battery",
	};
	const materials = [
		"Aluminum Alloy",
		"Aluminum Alloy",
		"Carbon Fiber",
		"High-Density Plastic",
		"Silicon-based Circuitry",
		"Lithium-Ion Battery"
	];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<div className="text-white grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:p-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
				>
					<Preview setShowMaterials={setShowMaterials} />
					<PlantScroll plants={plants} />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
				>
					<RobotComparison
						models={models}
						setSelectedModel={setSelectedModel}
					/>
					<Specifications selectedModel={selectedModel} />
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
			>
				<MaterialDialog
					showMaterials={showMaterials}
					setShowMaterials={setShowMaterials}
					materials={materials}
					materialLinks={materialLinks}
				/>
			</motion.div>
		</motion.div>
	);
}
