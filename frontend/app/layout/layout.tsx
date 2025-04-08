import { Links, Meta, Scripts, ScrollRestoration } from "react-router";
import ParticlesBackground from "~/components/particlebg";
import App from "~/layout/app";

export default function Layout({ children }: { children: React.ReactNode }) {
	const Layout = () => {
		return <App>{children}</App>;
	};

	return (
		<html lang="en">
			<head>
				<link rel="icon" href="LOGO.ico" type="image/x-icon" />
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Meta />
				<Links />
			</head>
			<body>
				<noscript>
					You need to enable JavaScript to run this app.
				</noscript>
				<ParticlesBackground />
				<Layout />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}
