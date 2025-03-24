import {
	ExternalLink,
} from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "~/components/ui/dialog";

export default function MaterialDialog({
	showMaterials,
	setShowMaterials,
	materials,
	materialLinks,
}: {
	showMaterials: boolean;
	setShowMaterials: any;
    materials: string[];
    materialLinks: any;
}) {
    type MaterialLinks = keyof typeof materialLinks;
	return (
		<>
			<Dialog open={showMaterials} onOpenChange={setShowMaterials}>
				<DialogContent className="bg-gray-950 text-white max-w-md border-0 rounded-xl p-6">
					<DialogHeader>
						<DialogTitle className="text-lg font-bold text-white">
							Materials Used
						</DialogTitle>
					</DialogHeader>
					<ul className="text-gray-300 space-y-3">
						{materials.map((material, idx) => (
							<li
								key={idx}
								className="flex justify-between items-center p-3 bg-gradient-to-r from-transparent via-gray-900 to-transparent transition"
							>
								<span>{material}</span>
								{(
									materialLinks as Record<
										MaterialLinks,
										string
									>
								)[material as MaterialLinks] && (
									<a
										href={
											(
												materialLinks as Record<
													MaterialLinks,
													string
												>
											)[material as MaterialLinks]
										}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-400 flex items-center space-x-1 hover:text-blue-300"
									>
										<span>More Info</span>
										<ExternalLink size={16} />
									</a>
								)}
							</li>
						))}
					</ul>
				</DialogContent>
			</Dialog>
		</>
	);
}
