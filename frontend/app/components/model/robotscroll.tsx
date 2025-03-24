import { Cpu, PlusCircle } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";

export default function RobotScroll({
	models,
	setSelectedModel,
	openDialog,
}: {
	models: any;
	setSelectedModel: Function;
	openDialog: any;
}) {
	return (
		<>
			<ScrollArea className="p-4 lg:p-6 bg-gray-900 rounded-2xl h-[300px] lg:h-[400px]">
				<h3 className="text-md lg:text-xl font-bold mb-3 border-b border-gray-700 pb-2 flex items-center justify-between">
					Robot Model Comparison
					<Cpu size={20} className="text-gray-400" />
				</h3>

				<div className="grid grid-cols-3 md:grid-cols-3 gap-3 lg:gap-4 px-2 lg:px-6">
					<Card
						className="bg-gray-800 p-3 lg:p-4 cursor-pointer hover:bg-gray-700 border-0 shadow-xl shadow-gray-950/50"
						onClick={openDialog}
					>
						<CardContent className="flex flex-col items-center">
							<PlusCircle size={28} className="text-green-500" />
							<p className="text-white text-xs lg:text-sm font-bold mt-2">
								Add New Model
							</p>
						</CardContent>
					</Card>

					{models.map((model: any) => (
						<Card
							key={model.id}
							className="bg-gray-800 p-3 lg:p-4 cursor-pointer hover:bg-gray-700 border-0 shadow-xl shadow-gray-950/50"
							onClick={() => setSelectedModel(model)}
						>
							<CardContent className="flex flex-col items-center">
								<Cpu size={28} className="text-blue-500" />
								<p className="text-white text-xs lg:text-sm font-bold mt-2">
									{model.name}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				<ScrollBar
					orientation="vertical"
					className="bg-gray-800 rounded-lg"
				/>
			</ScrollArea>
		</>
	);
}