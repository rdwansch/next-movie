import {useState} from 'react';
import {makeStyles, Container, Typography} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import RowMovies from '../components/RowMovies';
import Request from '../utils/request';

const useStyles = makeStyles((theme) => ({
	alertVisible: {
		position: 'absolute',
		top: 0,
		right: 0,
		transition: '1s linear all',
	},
	alertNone: {
		display: 'none',
		transition: '1s linear all',
	},
	title: {
		marginTop: 20,
		marginBottom: 10,
		letterSpacing: 0.8,
	},
}));

export default function index() {
	const [togleCss, setTogleCss] = useState(true);
	const css = useStyles();

	const ISSERVER = typeof window === 'undefined';
	let _isAlert = '';
	if (!ISSERVER) {
		_isAlert = localStorage.getItem('_isAlert') === 'yes';
	}

	return (
		<>
			{_isAlert ? (
				''
			) : (
				<Alert
					onClose={() => {
						localStorage.setItem('_isAlert', 'yes');
						setTogleCss(!togleCss);
					}}
					className={togleCss ? css.alertVisible : css.alertNone}
				>
					Use Google Chrome for better
				</Alert>
			)}
			<Layout title="Home">
				<Banner fetchUrl={Request.getNowPlaying}/>
				<Container>
					<section id="movies-row">
						<Typography variant="h4" color="textPrimary" className={css.title}>
							Movies For You
						</Typography>

						{/* prettier-ignore */}
						<RowMovies title="Trending Now" fetchUrl={Request.getTrendingMovies}/>
						{/* prettier-ignore */}
						<RowMovies title="Popular this Week" fetchUrl={Request.getPopularMovies}/>
						<RowMovies title="Top Rated" fetchUrl={Request.getTopRatedMovies}/>
						<RowMovies title="Upcoming" fetchUrl={Request.getUpcomingMovies}/>
					</section>

					<section id="tvshows-row">
						<h1></h1>
					</section>
				</Container>
			</Layout>
		</>
	);
}
