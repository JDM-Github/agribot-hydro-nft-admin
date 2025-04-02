import {
	type RouteConfig,
	index,
	route,
	layout,
} from "@react-router/dev/routes";

export default [
	route("login", "./routes/login.tsx"),
	route("*?", "./routes/not-found.tsx"),

	layout("./routes/protected-routes.tsx", [
		index("./routes/dashboard.tsx"),
		route("model", "./routes/model.tsx"),
		route("plants", "./routes/plants.tsx"),
		route("diseases", "./routes/diseases.tsx"),
		route("settings", "./routes/settings.tsx"),
		route("accounts", "./routes/accounts.tsx"),
	]),
] satisfies RouteConfig;
56