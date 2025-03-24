import {
    Package,
    Image,
} from "lucide-react";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import ModelViewer from "~/components/modelviewer";

export default function Preview({ setShowMaterials }: {setShowMaterials: Function}) {

	return (
		<>
			<Card className="relative bg-gradient-to-b from-gray-950 to-green-950/50 border-0 h-[300px] lg:h-[400px]">
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
						onClick={() => console.log("Show Robot PNG")}
					>
						<Image size={16} className="mr-2" />
						View PNG
					</Button>
				</div>
				<ModelViewer modelPath={"/rose.glb"}	/>		</Card>
		</>
	);
}