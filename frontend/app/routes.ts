import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/dashboard.tsx"),
	route("model", "routes/model.tsx"),
	route("login", "routes/login.tsx"),
	route("plants", "routes/plants.tsx"),
	route("settings", "routes/settings.tsx"),
	route("accounts", "routes/accounts.tsx"),
] satisfies RouteConfig;
