import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import RobotScroll from "~/components/model/robotscroll";
import { Textarea } from "~/components/ui/textarea";

export default function RobotComparison({
	objectDetection,
	stageclassification,
	segmentation,
	setSelectedModel,
}: {
	objectDetection: any;
	stageclassification: any;
	segmentation: any;
	setSelectedModel: Function;
}) {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [newModelVersion, setNewModelVersion] = useState("");
	const [newModelDescription, setNewModelDescription] = useState("");
	const [file, setFile] = useState<File | null>(null);

	const openDialog = () => {
		setIsDialogOpen(true);
	};

	const closeDialog = () => setIsDialogOpen(false);

	const handleAddModel = () => {
		const modelData = {
			file,
		};
		closeDialog();
	};

	return (
		<>
			<RobotScroll
				objectDetection={objectDetection}
				stageclassification={stageclassification}
				segmentation={segmentation}
				setSelectedModel={setSelectedModel}
				openDialog={openDialog}
			/>

			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogTrigger />
				<DialogContent className="bg-gray-900 text-white p-4 rounded-lg shadow-xl border-0">
					<DialogHeader>
						<DialogTitle className="text-lg font-bold">
							Add New Model
						</DialogTitle>
					</DialogHeader>
					<div className="space-y-4">
						{/* Model Version */}
						<div className="flex flex-col">
							<label
								htmlFor="model-version"
								className="text-sm font-medium"
							>
								Model Version
							</label>
							<Input
								id="model-version"
								type="text"
								value={newModelVersion}
								onChange={(e) =>
									setNewModelVersion(e.target.value)
								}
								className="mt-2 p-2 bg-gray-800 rounded-lg text-white border-0"
								placeholder="Enter model version"
							/>
						</div>

						{/* Model Description */}
						<div className="flex flex-col">
							<label
								htmlFor="model-description"
								className="text-sm font-medium"
							>
								Model Description
							</label>
							<Textarea
								id="model-description"
								value={newModelDescription}
								onChange={(e) =>
									setNewModelDescription(e.target.value)
								}
								className="mt-2 p-2 bg-gray-800 rounded-lg text-white border-0"
								placeholder="Enter model description"
								rows={4}
							/>
						</div>

						<div className="flex flex-col">
							<label
								htmlFor="model-file"
								className="text-sm font-medium"
							>
								Upload Model File (ML Model)
							</label>
							<input
								id="model-file"
								type="file"
								onChange={(e) =>
									setFile(
										e.target.files
											? e.target.files[0]
											: null
									)
								}
								className="mt-2 p-2 bg-gray-800 rounded-lg text-white border-0"
							/>
						</div>
					</div>
					<div className="mt-4 flex justify-end gap-4">
						<button
							onClick={closeDialog}
							className="bg-gray-600 text-white p-2 rounded-lg"
						>
							Cancel
						</button>
						<button
							onClick={handleAddModel}
							className="bg-green-600 text-white p-2 rounded-lg"
						>
							Add Model
						</button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
