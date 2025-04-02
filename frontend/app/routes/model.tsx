import type { Route as Rt } from "./+types/model";
export function meta({}: Rt.MetaArgs) {
	return [
		{ title: 'AGRI-BOT - "Model"' },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

import { useState } from "react";
import { motion } from "framer-motion";
import Preview from "~/components/model/preview";
import PlantScroll from "~/components/model/plantscroll";
import RobotComparison from "~/components/model/robotcomparison";
import Specifications from "~/components/model/specification";
import MaterialDialog from "~/components/model/materialdialog";
import RequestHandler from "~/lib/utilities/RequestHandler";


export async function loader() {
	try {
		const [
			plants,
			objectDetection,
			stageclassification,
			segmentation,
		] = await Promise.all([
			RequestHandler.fetchData(
				"get",
				"plant/get-all-only?fields=id,image,name,confidence"
			),
			RequestHandler.fetchData("get", "yoloobjectdetection/get-all"),
			RequestHandler.fetchData("get", "yolostageclassification/get-all"),
			RequestHandler.fetchData("get", "maskrcnnsegmentation/get-all"),
		]);

		if (!plants.success)
			throw new Error(plants.message || "Failed to fetch plant count.");
		if (!objectDetection.success)
			throw new Error(
				objectDetection.message ||
					"Failed to fetch object detection models."
			);
		if (!stageclassification.success)
			throw new Error(
				stageclassification.message ||
					"Failed to fetch stage classification models."
			);
		if (!segmentation.success)
			throw new Error(
				segmentation.message || "Failed to fetch segmentation models."
			);
		return {
			plants: plants.plants || [],
			objectDetection: objectDetection.models || [],
			stageClassification: stageclassification.models || [],
			segmentation: segmentation.models || [],
		};
	} catch (error: any) {
		console.error("Fetch error:", error.message || error);

		return {
			plants: [],
			objectDetection: [],
			error: error.message || "Unknown error occurred",
			stageClassification: [],
			segmentation: [],
		};
	}
}

export default function ModelPage({ loaderData }: Rt.ComponentProps) {
	const plants = loaderData.plants || [];
	const objectDetection = loaderData.objectDetection || [];
	const stageclassification = loaderData.stageClassification || [];
	const segmentation = loaderData.segmentation || [];
	

	const [selectedModel, setSelectedModel] = useState(objectDetection[0]);
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
						objectDetection={objectDetection}
						stageclassification={stageclassification}
						segmentation={segmentation}
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
