import { useLocation } from "react-router";
import Navbar from "~/layout/nav";
import Header from "./header";

export default function App({ children }: { children?: React.ReactNode }) {
	const location = useLocation();
	const isLoginPage = location.pathname === "/login";

	return (
		<div className="relative lg:flex md:flex sm:inline-block scrollbar-thin bg-transparent w-[100vw] min-h-[100vh]">
			{!isLoginPage && <Navbar />}
			<div className="flex-1 flex flex-col h-screen overflow-y-auto scrollbar-thin overflow-x-hidden">
				{!isLoginPage && <Header />}
				{children}
			</div>
		</div>
	);
}
