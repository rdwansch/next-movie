import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import router from "next/router";

import { AppBar, Toolbar, Container, makeStyles, Button } from "@material-ui/core";

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles(theme => ({
	btnNav: { letterSpacing: 1.5 },
	logo: { cursor: "pointer" },
	appBarLight: {
		backgroundColor: "whitesmoke",
		color: "black",
	},
	appBarDark: {
		backgroundColor: "black",
		color: "whitesmoke",
	},
}));

export default function Appbar() {
	const css = useStyles();
	const appBarLight = { backgroundColor: "whitesmoke", color: "black" };
	const appBarDark = { backgroundColor: "black", color: "whitesmoke" };
	const [abr, setAbr] = useState(appBarDark);
	const btnNav = [
		{
			name: "Movies",
			link: "/movies",
		},
		{
			name: "TV Shows",
			link: "/tvshows",
		},
		{
			name: "People",
			link: "/people",
		},
	];
	useEffect(() => {
		// window.addEventListener("scroll", () => {
		// 	const val = Math.round(window.scrollY);
		// 	const abr = document.querySelector("._app_bar");
		// 	if (val < 385) {
		// 		setAbr(appBarDark);
		// 	} else {
		// 		setAbr(appBarLight);
		// 	}
		// 	// console.log(abr);
		// });
	}, []);

	return (
		<AppBar position="fixed" color="secondary" className={`_app_bar`} style={abr}>
			<Container>
				<Toolbar>
					<Image src="/next-logo-light.png" width={120} height={40} onClick={() => router.push("/")} className={css.logo} />
					{btnNav.map(a => (
						<Link href={a.link} key={a.name}>
							<Button color="primary" className={css.btnNav}>
								<a>{a.name}</a>
							</Button>
						</Link>
					))}
				</Toolbar>
			</Container>
		</AppBar>
	);
}
