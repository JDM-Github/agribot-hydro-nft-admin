import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Card, CardContent } from "~/components/ui/card";
import { SiGithub, SiLinkedin, SiFacebook } from "react-icons/si";

export default function Links({ selectedTab, socialLinks, handleChange }: { selectedTab: string, socialLinks: any, handleChange: (e: any) => void }) {
	return (
		<>
			{selectedTab === "links" && (
				<Card className="bg-gray-900 shadow-lg rounded-lg border-0">
					<CardContent className="space-y-6">
						<h2 className="text-white text-xl font-semibold border-b border-gray-700 pb-2">
							Social Links
						</h2>
						<div>
							<label className="text-gray-400 text-sm flex items-center gap-2">
								<SiFacebook
									size={16}
									className="text-blue-500"
								/>
								Facebook
							</label>
							<Input
								type="url"
								name="facebook"
								value={socialLinks.facebook}
								onChange={handleChange}
								className="mt-1 text-gray-500 border-gray-600"
							/>
						</div>
						<div>
							<label className="text-gray-400 text-sm flex items-center gap-2">
								<SiLinkedin
									size={16}
									className="text-blue-400"
								/>
								Linkedin
							</label>
							<Input
								type="url"
								name="linkedin"
								value={socialLinks.linkedin}
								onChange={handleChange}
								className="mt-1 text-gray-500 border-gray-600"
							/>
						</div>
						<div>
							<label className="text-gray-400 text-sm flex items-center gap-2">
								<SiGithub size={16} className="text-gray-300" />
								GitHub
							</label>
							<Input
								type="url"
								name="github"
								value={socialLinks.github}
								onChange={handleChange}
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
