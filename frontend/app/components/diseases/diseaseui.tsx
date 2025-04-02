import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
	PieChart,
	Pie,
	Cell,
	BarChart,
	Bar,
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import ImageGallery from "./imagegallery";

export default function DiseaseDetails({ disease }: {disease: any}) {
	const [expanded, setExpanded] = useState(false);

    const fakeAnalytics = {
		confidence: [
			{ name: "High Confidence", value: disease.confidence },
			{ name: "Low Confidence", value: 100 - disease.confidence },
			{ name: "Low Confidence", value: 100 - disease.confidence },
			{ name: "Low Confidence", value: 100 - disease.confidence },
			{ name: "Low Confidence", value: 100 - disease.confidence },
		],
		recall: [{ name: "Recall", value: disease.recall }],
		mAP50: Array.from({ length: 10 }, (_, i) => ({
			index: i + 1,
			value: Math.random() * 100,
		})),
		mAP50_95: Array.from({ length: 10 }, (_, i) => ({
			index: i + 1,
			value: Math.random() * 100,
		})),
	};

	return (
		<tr className="bg-gray-950 border-gray-800 border">
			<td colSpan={5} className="p-4 w-full">
				<div className="flex flex-col md:flex-row justify-between w-full space-y-4 md:space-y-0">
					<div className="space-y-2 w-full md:w-2/3">
						<p className="text-gray-400">
							<strong className="text-blue-300">
								Description:
							</strong>{" "}
							{disease.description}
						</p>
					</div>
					<ImageGallery disease={disease} />
				</div>

				<div className="flex flex-col md:flex-row justify-between w-full space-y-4 md:space-y-0 mt-4">
					<div className="w-full md:w-2/3 grid grid-cols-2 sm:flex sm:flex-wrap gap-4">
						<Button className="w-full sm:w-auto min-w-[150px] text-white border-gray-600 hover:bg-gray-700">
							Edit Disease
						</Button>
					</div>
					<div className="w-full md:w-2/3">
						<Button
							className="w-full text-white border-gray-600 hover:bg-gray-700"
							onClick={() => setExpanded(!expanded)}
						>
							{expanded
								? "Hide Performance Metrics"
								: "View Performance Metrics"}
						</Button>
					</div>
				</div>

				<motion.div
					initial={{ height: 0, opacity: 0 }}
					animate={{
						height: expanded ? "auto" : 0,
						opacity: expanded ? 1 : 0,
					}}
					transition={{ duration: 0.2, ease: "easeOut" }}
					className="overflow-hidden mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
				>
					<div className="bg-gray-800 p-4 rounded-lg shadow-lg">
						<h3 className="text-center text-green-300 font-semibold mb-2">
							Confidence
						</h3>
						<ResponsiveContainer width="100%" height={200}>
							<PieChart>
								<Pie
									data={fakeAnalytics.confidence}
									dataKey="value"
									nameKey="name"
									cx="50%"
									cy="50%"
									outerRadius={60}
									label
								>
									<Cell fill="#8884d8" />
									<Cell fill="#ff7300" />
								</Pie>
							</PieChart>
						</ResponsiveContainer>
					</div>

					<div className="bg-gray-900 p-4 rounded-lg shadow-lg">
						<h3 className="text-center text-green-300 font-semibold mb-2">
							Recall
						</h3>
						<ResponsiveContainer width="100%" height={200}>
							<BarChart data={fakeAnalytics.recall}>
								<XAxis dataKey="name" tick={{ fill: "#ccc" }} />
								<YAxis tick={{ fill: "#ccc" }} />
								<Tooltip
									cursor={{ fill: "#374151", opacity: 0.3 }}
									contentStyle={{
										backgroundColor: "#1f2937",
										border: "none",
										color: "#fff",
									}}
								/>
								<Bar dataKey="value" fill="#82ca9d" />
							</BarChart>
						</ResponsiveContainer>
					</div>

					<div className="bg-gray-800 p-4 rounded-lg shadow-lg">
						<h3 className="text-center text-green-300 font-semibold mb-2">
							mAP50
						</h3>
						<ResponsiveContainer width="100%" height={200}>
							<LineChart data={fakeAnalytics.mAP50}>
								<XAxis
									dataKey="index"
									tick={{ fill: "#ccc" }}
								/>
								<YAxis tick={{ fill: "#ccc" }} />
								<Tooltip
									cursor={{ fill: "#374151", opacity: 0.3 }}
									contentStyle={{
										backgroundColor: "#1f2937",
										border: "none",
										color: "#fff",
									}}
								/>
								<Line
									type="monotone"
									dataKey="value"
									stroke="#ff7300"
									strokeWidth={2}
									dot={{ r: 4 }}
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>

					{/* mAP50_95 */}
					<div className="bg-gray-900 p-4 rounded-lg shadow-lg">
						<h3 className="text-center text-green-300 font-semibold mb-2">
							mAP50_95
						</h3>
						<ResponsiveContainer width="100%" height={200}>
							<BarChart data={fakeAnalytics.mAP50_95}>
								<XAxis
									dataKey="index"
									tick={{ fill: "#ccc" }}
								/>
								<YAxis tick={{ fill: "#ccc" }} />
								<Tooltip
									cursor={{ fill: "#374151", opacity: 0.3 }}
									contentStyle={{
										backgroundColor: "#1f2937",
										border: "none",
										color: "#fff",
									}}
								/>
								<Bar
									dataKey="value"
									fill="#d4526e"
									opacity={0.8}
								/>
							</BarChart>
						</ResponsiveContainer>
					</div>
				</motion.div>
			</td>
		</tr>
	);
}
