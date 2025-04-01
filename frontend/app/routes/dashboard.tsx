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
		const response = await RequestHandler.fetchData("get", "plant/count");
		if (!response.success) {
			throw new Error(response.message || "Failed to fetch users");
		}
		return { plantCount: response.count };
	} catch (error: any) {
		console.error("Fetch error:", error);
		return { plants: [] };
	}
}

const robotModels = [
	{
		name: "ModelV1.0.0",
		specs: [
			{ spec: "Accuracy", value: 100 },
			{ spec: "Precision", value: 100 },
			{ spec: "Recall", value: 60 },
			{ spec: "F1-Score", value: 70 },
		],
	},
	{
		name: "ModelV1.0.1",
		specs: [
			{ spec: "Accuracy", value: 85 },
			{ spec: "Precision", value: 100 },
			{ spec: "Recall", value: 65 },
			{ spec: "F1-Score", value: 75 },
		],
	},
	{
		name: "ModelV1.0.2",
		specs: [
			{ spec: "Accuracy", value: 90 },
			{ spec: "Precision", value: 100 },
			{ spec: "Recall", value: 70 },
			{ spec: "F1-Score", value: 78 },
		],
	},
];

const specs = { Battery: "8 hours", Capacity: "20L", Speed: "5 km/h" };

export default function AgriBotDashboard({ loaderData }: Rt.ComponentProps) {
	const plantCount = loaderData.plantCount;
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
					<RobotComparisonCard models={robotModels} />
					<MilestoneHeatmap />
				</motion.div>

				<motion.div
					className="flex-1 space-y-5"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
				>
					<CardSection plantCount={plantCount} />
					<RobotSpecification specs={specs} />
					<UpdateActivityCard />
				</motion.div>
			</div>
		</motion.div>
	);
}
