import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
	CartesianGrid,
} from "recharts";
import { Card, CardContent } from "~/components/ui/card";
import { useEffect, useState } from "react";
import { Cpu, ChevronDown } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

interface Model {
	name: string;
	specs: { spec: string; value: number }[];
}

const RobotComparisonCard = ({ models }: { models: Model[] }) => {
	const latestModels = models.slice(-5);
	const modelColors = ["#34D399", "#3B82F6", "#F97316", "#8B5CF6", "#EC4899"];

	const modelOptions = [
		"YOLOv8 Object Detection",
		"YOLOv8 Stage Classification",
		"Mask-RCNN Segmentation",
	];

	const [selectedModel, setSelectedModel] = useState(modelOptions[0]);

	const uniqueSpecs = Array.from(
		new Set(latestModels.flatMap((model) => model.specs.map((s) => s.spec)))
	);

	const chartData = uniqueSpecs.map((spec) => {
		let row: { spec: string; [key: string]: any } = { spec };
		latestModels.forEach((model) => {
			const foundSpec = model.specs.find((s) => s.spec === spec);
			row[model.name] = foundSpec ? foundSpec.value : 0;
		});
		return row;
	});

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Card className="bg-gray-900 text-white shadow-lg border-0 p-4 md:p-6">
			<CardContent>
				<div className="flex items-center justify-between mb-3 border-b border-gray-700 pb-2">
					<h3 className="lg:text-xl mg:text-xl text-md font-bold flex items-center">
						Latest 3 Model Comparison
						<Cpu size={24} className="text-gray-400 ml-2" />
					</h3>
					<DropdownMenu>
						<DropdownMenuTrigger className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-700">
							{selectedModel}{" "}
							<ChevronDown size={16} className="ml-2" />
						</DropdownMenuTrigger>
						<DropdownMenuContent className="bg-gray-800 text-white rounded-lg shadow-lg">
							{modelOptions.map((option) => (
								<DropdownMenuItem
									key={option}
									onClick={() => setSelectedModel(option)}
									className="hover:bg-gray-700 px-4 py-2 cursor-pointer"
								>
									{option}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<ResponsiveContainer width="100%" height={isMobile ? 200 : 300}>
					<LineChart data={chartData}>
						<CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
						<XAxis
							dataKey="spec"
							tick={{
								fill: "#ccc",
								fontSize: isMobile ? 10 : 14,
							}}
						/>
						<YAxis
							tick={{
								fill: "#ccc",
								fontSize: isMobile ? 10 : 14,
							}}
						/>
						<Tooltip
							contentStyle={{
								backgroundColor: "#333",
								border: "none",
							}}
						/>
						<Legend
							wrapperStyle={{ fontSize: isMobile ? 10 : 14 }}
						/>

						{latestModels.map((model, idx) => (
							<Line
								key={model.name}
								type="monotone"
								dataKey={model.name}
								stroke={modelColors[idx]}
								strokeWidth={isMobile ? 1.5 : 2.5}
								dot={{ r: isMobile ? 2 : 4 }}
							/>
						))}
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

export default RobotComparisonCard;

// add select on right side of this,

// YOLO Plant Object Detection
// YOLO Stage Classification (Healthy, Early Stage, Obvious Stage, Severe
