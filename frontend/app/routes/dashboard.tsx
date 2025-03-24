import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { Route as Rt } from "./+types/dashboard";
import RobotComparisonCard from "~/components/dashboard/robotcomparison";
import CardSection from "~/components/dashboard/cardsection";
import RobotSpecification from "~/components/dashboard/robotspecification";
import UpdateActivityCard from "~/components/dashboard/updateactivity";
import MilestoneHeatmap from "~/components/dashboard/milestone";

export function meta({}: Rt.MetaArgs) {
	return [
		{ title: 'AGRI-BOT - "Dashboard"' },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

const robotModels = [
	{
		name: "ModelV1.0.0",
		specs: [
			{ spec: "Speed", value: 100 },
			{ spec: "Battery Life", value: 60 },
			{ spec: "Processing Power", value: 70 },
		],
	},
	{
		name: "ModelV1.0.1",
		specs: [
			{ spec: "Speed", value: 85 },
			{ spec: "Battery Life", value: 65 },
			{ spec: "Processing Power", value: 75 },
		],
	},
	{
		name: "ModelV1.0.2",
		specs: [
			{ spec: "Speed", value: 90 },
			{ spec: "Battery Life", value: 70 },
			{ spec: "Processing Power", value: 78 },
		],
	},
];

const specs = { Battery: "8 hours", Capacity: "20L", Speed: "5 km/h" };

export default function AgriBotDashboard() {


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
					<CardSection />
					<RobotSpecification specs={specs} />
					<UpdateActivityCard />
				</motion.div>
			</div>
		</motion.div>
	);
}
