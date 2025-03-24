import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";

export default function PlantScroll({ plants }: { plants: any }) {
	return (
		<>
			<ScrollArea className="w-full whitespace-nowrap bg-gray-900 rounded-2xl p-2">
				<div className="flex space-x-4 p-2 min-w-max">
					{plants.map((plant: any) => (
						<div
							key={plant.id}
							className="flex flex-col items-center cursor-pointer hover:opacity-80"
							onClick={() =>
								console.log(`Clicked plant ID: ${plant.id}`)
							}
						>
							<img
								src={plant.src}
								alt={plant.name}
								className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-lg"
							/>
							<p className="text-white text-xs lg:text-sm mt-2 font-semibold">
								{plant.name}
							</p>
							<p className="text-gray-400 text-xs">
								Confidence: {plant.confidence}%
							</p>
						</div>
					))}
				</div>
				<ScrollBar
					orientation="horizontal"
					className="bg-gray-800 rounded-lg"
				/>
			</ScrollArea>
		</>
	);
}
