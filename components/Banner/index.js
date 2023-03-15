import { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import PropTypes from 'prop-types';
import { Container, makeStyles, Typography, Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
  bannerContainer: {
    marginTop: theme.spacing(4),
    width: '100%',
    height: 600,
  },
  typography: {
    color: grey[50],
    textShadow: `1px 2px 10px black`,
    marginBottom: 10,
  },
  caption: {
    color: grey[50],
    textShadow: `1px 2px 2px black`,
  },
  contentContainer: {
    justifyContent: 'center',
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden2',
  },
  content: {
    width: `50%`,
  },
  button: {
    marginRight: 10,
    backgroundColor: 'rgba(0,0,0,.4)',
    color: 'whitesmoke',
    borderColor: grey[400],
    '&:hover': {
      backgroundColor: 'whitesmoke',
      color: 'black',
    },
  },
  fadeBottom: {
    bottom: 0,
    width: '100%',
    backgroundImage:
      'linear-gradient(to top,#111,rgba(14, 0, 0, 0.061)) !important',
    height: '10%',
    position: 'absolute',
  },
}));

const baseImgUrl = 'https://image.tmdb.org/t/p/original/';

export default function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState({});
  const router = useRouter();
  const css = useStyles();

  useEffect(async () => {
    try {
      const res = await axios.get(fetchUrl);
      const data = await res.data;
      const mv = data.results;
      // get Random element/ index from array
      // arr[Math.floor(Math.random() * arr.length)]
      setMovie(mv[Math.floor(Math.random() * mv.length)]);

      // let bgbaner = document.querySelector('.__bgbanner');
      // let ctnbanner = document.querySelector('.__contentBanner');
      // window.addEventListener('scroll', () => {
      //   const val = Math.round(window.scrollY);
      //   bgbaner.style.backgroundPosition = `0 ${val * 0.5}px`;
      //   ctnbanner.style.top = `${val < 250 ? val / 2 : ''}px`;
      // });
    } catch (e) {
      console.info(e);
    }
  }, []);
  // console.log(movie.backdrop_path);
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          backgroundImage: `url('${baseImgUrl + movie?.backdrop_path}')`,
          backgroundPosition: '0px 50px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          objectFit: 'contain',
          opacity: 0.9,
          // backgroundAttachment: 'fixed',
        }}
        className={`${css.bannerContainer} __bgbanner`}
      >
        <Container className={`${css.contentContainer} __contentBanner`}>
          <div className={css.content}>
            <Typography variant="h2" className={css.typography}>
              {movie?.title || movie?.original_name || movie?.original_title}
            </Typography>
            <Typography variant="body1" className={css.typography}>
              {movie.overview}
            </Typography>

            <div>
              <Button
                className={css.button}
                variant="outlined"
                onClick={() => router.push(`movie/details/${movie.id}`)}
              >
                Details
              </Button>
              <Button className={css.button} variant="outlined">
                Add Favorite
              </Button>
            </div>
            <Typography variant="caption" className={css.caption}>
              {movie.release_date}
            </Typography>
          </div>
        </Container>
      </div>
      <div className={css.fadeBottom} />
    </div>
  );
}
Banner.propTypes = {
  fetchUrl: PropTypes.string.isRequired,
};
