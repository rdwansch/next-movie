import { Container } from '@material-ui/core';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import RowMovies from '../components/RowMovies';
import Request from '../utils/request';

export default function index() {
  return (
    <>
      <Layout title="Home">
        <Banner fetchUrl={Request.getNowPlaying} />
        <Container>
          <section id="movies-row">
            {/* prettier-ignore */}
            <RowMovies title="Trending Now" fetchUrl={Request.getTrendingMovies}/>
            {/* prettier-ignore */}
            <RowMovies title="Popular this Week" fetchUrl={Request.getPopularMovies}/>
            <RowMovies title="Top Rated" fetchUrl={Request.getTopRatedMovies} />
            <RowMovies title="Upcoming" fetchUrl={Request.getUpcomingMovies} />
          </section>

          <section id="tvshows-row">
            <h1></h1>
          </section>
        </Container>
      </Layout>
    </>
  );
}
