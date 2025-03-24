import {
    BatteryCharging,
    Rocket,
    List,
    Info,
    Settings,
    Package,
} from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";

export default function Specifications({ selectedModel }: { selectedModel : any}) {
	return (
		<>
			<Card className="bg-gradient-to-b from-gray-900 to-gray-950 bg p-4 lg:p-6 border-0 rounded-lg shadow-lg">
				<CardContent>
					<h3 className="text-md lg:text-xl font-bold text-white border-b border-gray-700 pb-2 mb-3 flex items-center justify-between">
						Specifications
						<Settings size={24} className="text-gray-400" />
					</h3>

					<ul className="text-gray-300 text-sm lg:text-base space-y-3">
						<li className="flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<List size={18} className="text-gray-400" />
								<span className="text-gray-400">Model:</span>
							</div>
							<span className="text-white font-semibold">
								{selectedModel.name}
							</span>
						</li>
						<li className="flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<Info size={18} className="text-gray-400" />
								<span className="text-gray-400">
									Description:
								</span>
							</div>
							<span className="text-white font-semibold">
								{selectedModel.description}
							</span>
						</li>
						<li className="flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<BatteryCharging
									size={18}
									className="text-green-400"
								/>
								<span className="text-gray-400">
									Battery Life:
								</span>
							</div>
							<span className="text-green-400 font-semibold">
								8 hours
							</span>
						</li>
						<li className="flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<Package size={18} className="text-blue-400" />
								<span className="text-gray-400">Capacity:</span>
							</div>
							<span className="text-blue-400 font-semibold">
								20L
							</span>
						</li>
						<li className="flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<Rocket size={18} className="text-yellow-400" />
								<span className="text-gray-400">Speed:</span>
							</div>
							<span className="text-yellow-400 font-semibold">
								5 km/h
							</span>
						</li>
					</ul>
				</CardContent>
			</Card>
		</>
	);
}