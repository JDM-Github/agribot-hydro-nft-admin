import { motion } from "framer-motion";
import type { Route as Rt } from "./+types/dashboard";
import RobotComparisonCard from "~/components/dashboard/robotcomparison";
import CardSection from "~/components/dashboard/cardsection";
import RobotSpecification from "~/components/dashboard/robotspecification";
import UpdateActivityCard from "~/components/dashboard/updateactivity";
import MilestoneHeatmap from "~/components/dashboard/milestone";
import RequestHandler from "~/lib/utilities/RequestHandler";

export function meta({}: Rt.MetaArgs) {
	return [
		{ title: 'AGRI-BOT - "Dashboard"' },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export async function loader() {
	try {
		const [
			plants,
			diseases,
			objectDetection,
			stageclassification,
			segmentation,
			activities,
		] = await Promise.all([
			RequestHandler.fetchData("get", "plant/count"),
			RequestHandler.fetchData("get", "disease/count"),
			RequestHandler.fetchData(
				"get",
				"yoloobjectdetection/get-all?count=5"
			),
			RequestHandler.fetchData("get", "yolostageclassification/get-all"),
			RequestHandler.fetchData("get", "maskrcnnsegmentation/get-all"),
			RequestHandler.fetchData("get", "activity/get-all"),
		]);

		if (!plants.success)
			throw new Error(plants.message || "Failed to fetch plant count.");
		if (!diseases.success)
			throw new Error(
				diseases.message || "Failed to fetch disease count."
			);
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
		if (!activities.success)
			throw new Error(
				activities.message || "Failed to fetch activities."
			);
		
			const activitiesMilestone = activities.activities.reduce(
				(acc: any, activity: any) => {
					const date = activity.createdAt.split("T")[0];
					if (!acc[date]) {
						acc[date] = { date, count: 0 };
					}
					acc[date].count += 1;
					return acc;
				},
				{}
			);

			const formattedActivities = Object.values(activitiesMilestone);

		return {
			plantCount: plants.count || 0,
			diseaseCount: diseases.count || 0,
			objectDetection: objectDetection.models || [],
			stageClassification: stageclassification.models || [],
			segmentation: segmentation.models || [],
			activities: activities.activities || [],
			activitiesMilestone: formattedActivities,
		};
	} catch (error: any) {
		console.error("Fetch error:", error.message || error);

		return {
			plantCount: 0,
			diseaseCount: 0,
			objectDetection: [],
			stageClassification: [],
			segmentation: [],
			activitiesMilestone: [],
			error: error.message || "Unknown error occurred",
		};
	}
}


const specs = {
	Processor: "Raspberry Pi 4 Model B (Quad-core Cortex-A72, 1.5GHz)",
	RAM: "8GB LPDDR4",
	Storage: "128GB microSD",

	Camera: "Raspberry Pi Camera Module 3",
	Still_Resolution: "11.9 megapixels",
	Video_Modes: "2304 × 1296p56, 2304 × 1296p30 HDR, 1536 × 864p120",
	Sensor_Resolution: "4608 × 2592 pixels",
	Sensor_Image_Area: "6.45 × 3.63mm (7.4mm diagonal)",
	Horizontal_FoV: "66 degrees",
	Vertical_FoV: "41 degrees",
	Frame_Rate: "30 FPS",

	Object_Detection_Model: "YOLOv8 (for detecting objects like plants)",
	Stage_Classification_Model: "YOLOv8 (for classifying plant health stages)",
	Segmentation_Model:
		"Mask R-CNN (for segmenting areas like leaves or disease regions)",
	Detection_Accuracy: {
		YOLO_Object_Detection: "90-95%",
		YOLO_Stage_Classification: "85-92%",
		Mask_RCNN_Segmentation: "87-94%",
	},
	Max_Object_Detection_Range: "5-10 meters",

	Number_of_Sprayers: 4,
	Spray_Precision: "Adaptive (based on AI detection)",
	Spray_Activation_Method: "Relay-controlled via Raspberry Pi",

	Wireless_Connectivity: "Wi-Fi (2.4GHz & 5GHz) + Bluetooth 5.0",
	Edge_Processing: "Runs AI models on-device (no cloud needed)",

	Heat_Resistance:
		"Up to 80°C (suitable for moderate outdoor and indoor conditions)",
	Water_Resistance: "IP65 (with proper enclosure)",

	Material: "PETG",
};

export default function AgriBotDashboard({ loaderData }: Rt.ComponentProps) {
	const plantCount = loaderData.plantCount;
	const diseaseCount = loaderData.diseaseCount;
	const objectDetection = loaderData.objectDetection;
	const stageclassification = loaderData.stageClassification;
	const segmentation = loaderData.segmentation;
	const activities = loaderData.activities;
	const activitiesMilestone = loaderData.activitiesMilestone;

	return (
		<motion.div
			className="p-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div className="lg:flex inline-block space-y-6 lg:space-x-5 w-full">
				<motion.div
					className="lg:w-[48vw] w-[100%] space-y-5"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
				>
					<RobotComparisonCard
						objectDetection={objectDetection}
						stageclassification={stageclassification}
						segmentation={segmentation}
					/>
					<MilestoneHeatmap activities={activitiesMilestone} />
				</motion.div>

				<motion.div
					className="flex-1 space-y-5"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
				>
					<CardSection
						plantCount={plantCount}
						diseaseCount={diseaseCount}
					/>
					<RobotSpecification specs={specs} />
					<UpdateActivityCard activities={activities} />
				</motion.div>
			</div>
		</motion.div>
	);
}
