import { Settings } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";

export default function RobotSpecification({specs}: {specs: { [key: string]: string }}) {
	return (
		<Card className="bg-gray-800 border-0 text-white shadow-lg">
			<CardContent>
				<h3 className="lg:text-xl mg:text-xl text-md font-bold mb-3 border-b border-gray-700 pb-2 flex items-center justify-between">
					Robot Specifications
					<Settings size={24} className="text-gray-400" />
				</h3>
				<ul className="space-y-2">
					{Object.entries(specs).map(([key, value], idx) => (
						<li
							key={idx}
							className={`flex items-center justify-between px-3 py-2 rounded-lg ${
								idx % 2 === 0 ? "bg-gray-700" : "bg-gray-750"
							}`}
						>
							<span className="font-semibold capitalize">
								{key}:
							</span>
							<span className="text-gray-300">{value}</span>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
}
