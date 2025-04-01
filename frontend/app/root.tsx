import { Outlet } from "react-router";
import "./app.css";

import Layout from "./layout/layout";
import link from "./layout/link";
import ErrorBoundary from "./layout/error";
export { Layout, link, ErrorBoundary };

export default function App() {
	return <Outlet />;
}
