import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { FileTextIcon, MailIcon, UserIcon } from "lucide-react";
import { Input } from "~/components/ui/input";
import { Card, CardContent } from "~/components/ui/card";

export default function Profile({ selectedTab, username, setUsername, email, setEmail, description, setDescription }: { selectedTab: string, username: string, setUsername: (value: string) => void, email: string, setEmail: (value: string) => void, description: string, setDescription: (value: string) => void }) {
	return (
		<>
			{selectedTab === "profile" && (
				<Card className="bg-gray-900 shadow-lg rounded-lg border-0">
					<CardContent className="space-y-6">
						<h2 className="text-xl font-semibold border-b border-gray-700 pb-2 text-white flex items-center justify-between">
							Profile
						</h2>

						<div>
							<label className="text-gray-400 text-sm flex items-center gap-2">
								<UserIcon size={16} className="text-gray-500" />
								Username
							</label>
							<Input
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className="mt-1 text-gray-500 border-gray-600"
							/>
						</div>
						<div>
							<label className="text-gray-400 text-sm flex items-center gap-2">
								<MailIcon size={16} className="text-gray-500" />
								Email
							</label>
							<Input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-1 text-gray-500 border-gray-600"
							/>
						</div>
						<div>
							<label className="text-gray-400 text-sm flex items-center gap-2">
								<FileTextIcon
									size={16}
									className="text-gray-500"
								/>
								Description
							</label>
							<Textarea
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								rows={5}
								className="mt-1 text-gray-500 border-gray-600"
							/>
						</div>
						<div className="flex justify-end">
							<Button
								onClick={() => console.log("Saving profile...")}
								className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition"
							>
								Save
							</Button>
						</div>
					</CardContent>
				</Card>
			)}
		</>
	);
}
