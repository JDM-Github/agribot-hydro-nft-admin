import { Cpu, PlusCircle } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useState } from "react";

export default function RobotScroll({
	objectDetection,
	stageclassification,
	segmentation,
	setSelectedModel,
	openDialog,
}: {
	objectDetection: any;
	stageclassification: any;
	segmentation: any;
	setSelectedModel: Function;
	openDialog: any;
}) {
	const [models, setModels] = useState<any>(objectDetection);
	const [selectedCategory, setSelectedCategory] =
		useState<string>("objectDetection");

	const modelOptions = [
		{ label: "YOLOv8 Object Detection", key: "objectDetection" },
		{ label: "YOLOv8 Stage Classification", key: "stageclassification" },
		{ label: "Mask-RCNN Segmentation", key: "segmentation" },
	];

	const changeCategory = (value: string) => {
		setSelectedCategory(value);
		switch (selectedCategory) {
			case "stageclassification":
				setModels(stageclassification);
				setSelectedModel(stageclassification[0]);
				break;
			case "segmentation":
				setModels(segmentation);
				setSelectedModel(segmentation[0]);
				break;
			default:
				setModels(objectDetection);
				setSelectedModel(objectDetection[0]);
				break;
		}
	};

	const getCpuIconColor = (category: string) => {
			switch (category) {
				case "stageclassification":
					return "text-yellow-500";
				case "segmentation":
					return "text-red-500";
				default:
					return "text-blue-500";
			}
		};

	return (
		<>
			<ScrollArea className="p-4 lg:p-6 bg-gray-900 rounded-2xl h-[300px] lg:h-[350px]">
				<div className="flex justify-between items-center mb-3">
					<h3 className="text-md lg:text-xl font-bold border-b border-gray-700 pb-2">
						<span className="text-green-200 text-left">
							{
								modelOptions.find(
									(option) => option.key === selectedCategory
								)?.label
							}{" "}
							Models
						</span>
					</h3>

					<DropdownMenu>
						<DropdownMenuTrigger>
							<button className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-700">
								Select Model Type
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="bg-gray-800 text-white">
							{modelOptions.map((option) => (
								<DropdownMenuItem
									key={option.key}
									onClick={() => changeCategory(option.key)}
								>
									{option.label}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

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
								<Cpu
									size={28}
									className={getCpuIconColor(
										selectedCategory
									)}
								/>
								<p className="text-white text-xs lg:text-sm font-bold mt-2">
									{model.version}
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
