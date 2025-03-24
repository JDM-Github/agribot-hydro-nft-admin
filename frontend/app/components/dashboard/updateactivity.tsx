import { Card, CardContent } from "~/components/ui/card";
import { BarChart, Clock, Cpu, FileText, GitCommit, RefreshCw, Settings } from "lucide-react";

interface Update {
	type: string,
	repo: string;
	details: string;
	date: string;
}

const updates: Update[] = [
	{
		type: "sensor-update",
		repo: "AGRI-BOT",
		details: "Calibrated soil moisture sensor for better accuracy",
		date: "March 9, 2025",
	},
	{
		type: "ai-model",
		repo: "PlantHealthAI",
		details: "Trained AI to detect early-stage leaf diseases",
		date: "March 8, 2025",
	},
	{
		type: "hardware-fix",
		repo: "AGRI-BOT",
		details: "Fixed motor response issue in autonomous sprayer",
		date: "March 7, 2025",
	},
];

const getTypeIcon = (type: string) => {
	switch (type) {
		case "sensor-update":
			return <BarChart size={16} className="text-green-400" />;
		case "ai-model":
			return <Cpu size={16} className="text-blue-400" />;
		case "hardware-fix":
			return <Settings size={16} className="text-yellow-400" />;
		default:
			return null;
	}
};


const UpdateActivityCard = () => {
	return (
		<Card className="bg-gradient-to-b from-gray-900 to-gray-950 text-white shadow-lg border-0 p-4">
			<CardContent>
				<h3 className="lg:text-xl mg:text-xl text-md font-bold mb-3 border-b border-gray-700 pb-2 flex items-center justify-between">
					Update Activity
					<RefreshCw size={24} className="text-gray-400" />
				</h3>

				<ul className="space-y-3">
					{updates.map((update, idx) => (
						<li key={idx} className="flex items-start space-x-3">
							{getTypeIcon(update.type)}
							<div>
								<p className="text-sm text-gray-300">
									<span className="font-semibold">
										{update.repo}
									</span>{" "}
									- {update.details}
								</p>
								<p className="text-xs text-gray-500">
									{update.date}
								</p>
							</div>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
};

export default UpdateActivityCard;
