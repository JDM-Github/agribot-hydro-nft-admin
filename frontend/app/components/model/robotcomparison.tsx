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
	models,
	setSelectedModel,
}: {
	models: any;
	setSelectedModel: Function;
}) {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [newModelName, setNewModelName] = useState("");
	const [newModelDescription, setNewModelDescription] = useState("");
	const [newModelTraits, setNewModelTraits] = useState("");
	const [file, setFile] = useState<File | null>(null);
	const [modelId, setModelId] = useState<string>("");

	const openDialog = () => {
		// Generate a random ID or any ID based on your logic
		const generatedId = `ID-${Math.floor(Math.random() * 10000)}`;
		setModelId(generatedId);
		setIsDialogOpen(true);
	};

	const closeDialog = () => setIsDialogOpen(false);

	const handleAddModel = () => {
		// Handle the logic for adding a new model
		const modelData = {
			id: modelId,
			name: newModelName,
			description: newModelDescription,
			traits: newModelTraits,
			file,
		};

		// You can call a function to handle model data
		// For now, we will just log the data
		console.log("New model data:", modelData);

		closeDialog();
	};

	return (
		<>
			<RobotScroll
				models={models}
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
						<div className="flex flex-col">
							<label
								htmlFor="model-id"
								className="text-sm font-medium"
							>
								Model ID
							</label>
							<Input
								id="model-id"
								type="text"
								value={modelId}
								readOnly
								className="mt-2 p-2 bg-gray-800 rounded-lg text-white border-0"
							/>
						</div>

						<div className="flex flex-col">
							<label
								htmlFor="model-name"
								className="text-sm font-medium"
							>
								Model Name
							</label>
							<Input
								id="model-name"
								type="text"
								value={newModelName}
								onChange={(e) =>
									setNewModelName(e.target.value)
								}
								className="mt-2 p-2 bg-gray-800 rounded-lg text-white border-0"
								placeholder="Enter model name"
							/>
						</div>

						<div className="flex flex-col">
							<label
								htmlFor="model-description"
								className="text-sm font-medium"
							>
								Description
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
								htmlFor="model-traits"
								className="text-sm font-medium"
							>
								Traits (e.g., features, specifications)
							</label>
							<Textarea
								id="model-traits"
								value={newModelTraits}
								onChange={(e) =>
									setNewModelTraits(e.target.value)
								}
								className="mt-2 p-2 bg-gray-800 rounded-lg text-white border-0"
								placeholder="Enter model traits"
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
