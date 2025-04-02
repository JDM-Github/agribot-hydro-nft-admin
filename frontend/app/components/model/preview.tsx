import { Package, Image } from "lucide-react";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import ModelViewer from "~/components/modelviewer";
import { useState } from "react";

export default function Preview({
	setShowMaterials,
}: {
	setShowMaterials: Function;
}) {
	const [isModelLoaded, setIsModelLoaded] = useState(false);
	const [isImageView, setIsImageView] = useState(true);

	return (
		<Card className="relative bg-gradient-to-b from-gray-950 to-green-950/50 border-0 h-[300px] lg:h-[400px] mb-3">
			<div className="absolute right-4 flex space-x-2">
				<Button
					variant="outline"
					size="sm"
					className="text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-white bg-transparent z-10"
					onClick={() => setShowMaterials(true)}
				>
					<Package size={16} className="mr-2" />
					Materials
				</Button>
				<Button
					variant="outline"
					size="sm"
					className="text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-white bg-transparent z-10"
					onClick={() => setIsImageView(!isImageView)}
				>
					<Image size={16} className="mr-2" />
					{!isImageView ? "View 2D" : "View 3D"}
				</Button>
			</div>

			{!isModelLoaded && !isImageView ? (
				<div className="flex items-center justify-center h-full">
					<Button
						variant="outline"
						size="lg"
						className="text-white bg-transparent border-gray-700 hover:bg-gray-800 hover:text-white"
						onClick={() => setIsModelLoaded(true)}
					>
						Load 3D Model
					</Button>
				</div>
			) : isImageView ? (
				<div className="flex items-center justify-center h-full">
					<img
						src="/AGRIBOT-Image.png"
						alt="AGRIBOT Image"
						className="object-contain w-full h-full transform scale-150"
					/>
				</div>
			) : (
				<ModelViewer modelPath={"/AGRIBOT.glb"} />
			)}
		</Card>
	);
}
