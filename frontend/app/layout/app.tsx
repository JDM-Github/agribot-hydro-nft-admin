import Navbar from "~/layout/nav";
import { useAuth } from "~/context/auth";
import Header from "./header";
import Login from "~/routes/login";

export default function App({ children }: { children: React.ReactNode }) {
	const { isAuthenticated } = useAuth();
	return (
		<>
			{isAuthenticated ? (
				<div className="relative lg:flex md:flex sm:inline-block scrollbar-thin bg-transparent w-[100vw] min-h-[100vh]">
					<Navbar />
					<div className="flex-1 flex flex-col h-screen overflow-y-auto scrollbar-thin overflow-x-hidden">
						<Header />
						{children}
					</div>
				</div>
			) : (
				<Login />
			)}
		</>
	);
}
