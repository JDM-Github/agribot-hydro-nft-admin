import {
	GaugeCircle,
	Crosshair, 
	CornerDownRight,
	BarChart4,
	BarChart3,
	Layers3,
	Settings,
} from "lucide-react";

import { Card, CardContent } from "~/components/ui/card";

export default function Specifications({
	selectedModel,
}: {
	selectedModel: any;
}) {
	return (
		<Card className="bg-gradient-to-b from-gray-900 to-gray-950 p-4 lg:p-6 border-0 rounded-lg shadow-lg">
			<CardContent>
				<h3 className="text-md lg:text-xl font-bold text-white border-b border-gray-700 pb-2 mb-3 flex items-center justify-between">
					Model Details
					<Settings size={24} className="text-gray-400" />
				</h3>

				{selectedModel && (
					<>
						{/* Model Description */}
						<div className="mb-4">
							<p className="text-gray-400 text-sm">
								<strong>Description:</strong>{" "}
								{selectedModel.description ||
									"No description available."}
							</p>
						</div>

						<ul className="text-gray-300 text-sm lg:text-base space-y-3">
							<li className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<Layers3
										size={18}
										className="text-gray-400"
									/>
									<span className="text-gray-400">
										Model:
									</span>
								</div>
								<span className="text-white font-semibold">
									{selectedModel.version}
								</span>
							</li>

							<li className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<GaugeCircle
										size={18}
										className="text-green-500"
									/>
									<span className="text-gray-400">
										Accuracy:
									</span>
								</div>
								<span className="text-green-500 font-semibold">
									{(selectedModel.accuracy * 100).toFixed(2)}%
								</span>
							</li>

							{/* Precision */}
							<li className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<Crosshair
										size={18}
										className="text-blue-500"
									/>
									<span className="text-gray-400">
										Precision:
									</span>
								</div>
								<span className="text-blue-500 font-semibold">
									{(selectedModel.precision * 100).toFixed(2)}
									%
								</span>
							</li>

							{/* Recall */}
							<li className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<CornerDownRight
										size={18}
										className="text-yellow-400"
									/>
									<span className="text-gray-400">
										Recall:
									</span>
								</div>
								<span className="text-yellow-400 font-semibold">
									{(selectedModel.recall * 100).toFixed(2)}%
								</span>
							</li>

							{/* Map 50 */}
							<li className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<BarChart4
										size={18}
										className="text-indigo-400"
									/>
									<span className="text-gray-400">
										Map 50:
									</span>
								</div>
								<span className="text-indigo-400 font-semibold">
									{(selectedModel.mAP50 * 100).toFixed(2)}%
								</span>
							</li>

							{/* Map 50_95 */}
							<li className="flex items-center justify-between">
								<div className="flex items-center space-x-2">
									<BarChart3
										size={18}
										className="text-purple-400"
									/>
									<span className="text-gray-400">
										Map 50_95:
									</span>
								</div>
								<span className="text-purple-400 font-semibold">
									{(selectedModel.mAP50_95 * 100).toFixed(2)}%
								</span>
							</li>
						</ul>
					</>
				)}
			</CardContent>
		</Card>
	);
}
