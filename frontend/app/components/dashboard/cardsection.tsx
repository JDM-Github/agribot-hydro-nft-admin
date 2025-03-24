import { Card, CardContent } from "~/components/ui/card";
import { Home, Users, Cpu } from "lucide-react";

export default function CardSection() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 flex-1">
			<Card className="bg-gray-900 shadow-lg border-0 py-2 px-2 relative overflow-hidden">
				<CardContent className="py-1 px-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<Home size={32} className="text-green-500" />
							<div>
								<p className="text-gray-400 text-xs md:text-sm">
									Registered Robots
								</p>
								<p className="text-xl md:text-2xl font-bold text-white">
									50
								</p>
							</div>
						</div>
					</div>
				</CardContent>
				<div className="absolute top-0 rounded-2xl right-0 h-full w-1/4 bg-gradient-to-b from-green-500/30 to-transparent"></div>
			</Card>

			<Card className="bg-gray-900 shadow-lg border-0 py-2 px-2 relative overflow-hidden">
				<CardContent className="py-1 px-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<Users size={32} className="text-blue-500" />
							<div>
								<p className="text-gray-400 text-xs md:text-sm">
									Total Accounts
								</p>
								<p className="text-xl md:text-2xl font-bold text-white">
									50
								</p>
							</div>
						</div>
					</div>
				</CardContent>
				<div className="absolute top-0 rounded-2xl right-0 h-full w-1/4 bg-gradient-to-b from-blue-500/30 to-transparent"></div>
			</Card>

			<Card className="bg-gray-900 shadow-lg border-0 py-2 px-2 relative overflow-hidden">
				<CardContent className="py-1 px-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<Cpu size={32} className="text-purple-500" />
							<div>
								<p className="text-gray-400 text-xs md:text-sm">
									Current Model
								</p>
								<p className="font-bold text-xl md:text-2xl text-white">
									ModelV1.0.0
								</p>
								<p className="text-[10px] md:text-xs text-gray-300">
									AI for plant detection
								</p>
							</div>
						</div>
					</div>
				</CardContent>
				<div className="absolute top-0 rounded-2xl right-0 h-full w-1/4 bg-gradient-to-b from-purple-500/30 to-transparent"></div>
			</Card>
		</div>
	);
}
