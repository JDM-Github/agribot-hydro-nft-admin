import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "~/components/ui/card";
import { useEffect, useState } from "react";
import { Cpu } from "lucide-react";

interface Model {
	name: string;
	specs: { spec: string; value: number }[];
}

const RobotComparisonCard = ({ models }: { models: Model[] }) => {
	const latestModels = models.slice(-5);
	const modelColors = ["#34D399", "#3B82F6", "#F97316", "#8B5CF6", "#EC4899"];

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
				<h3 className="lg:text-xl mg:text-xl text-md font-bold mb-3 border-b border-gray-700 pb-2 flex items-center justify-between">
					Robot Model Comparison
					<Cpu size={24} className="text-gray-400" />
				</h3>

				<ResponsiveContainer width="100%" height={isMobile ? 200 : 300}>
					<LineChart data={chartData}>
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
