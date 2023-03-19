import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import axios from '../../utils/axios';
// // // // // // //
import { Backdrop, CircularProgress, makeStyles, Typography, Tooltip, withStyles } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  posters: {
    display: 'flex',
    overflowY: 'hidden',
    overflowX: 'hidden',
    height: 150,
    // position: 'relative',
  },
  poster: {
    // width: 100,
    transition: '.2s linear all',
    marginRight: `10px !important`,
    opacity: 0.75,
    // menskalakan sesuai ukuran
    // objectFit: 'cover',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.15)',
      opacity: 1,
    },
  },
  imgContainer: {
    position: 'relative',
    // width: ,
  },
  title: {
    padding: 10,
    color: 'whitesmoke',
  },
}));

// toltip element
const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const baseImgUrl = 'https://image.tmdb.org/t/p/w300';

export default function RowMovies({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const css = useStyles();

  useEffect(async () => {
    try {
      const res = await axios.get(fetchUrl);
      const data = await res.data.results;
      console.log(data);
      const newData = data.splice(9, 11);
      // console.log(newData);
      setMovies(newData);
    } catch (e) {
      if (e.status_code === 7) console.info('Unauthorize | Invalid API key');
      if (e.status_code === 34) console.info('Req could not be found 404');
    }
  }, [fetchUrl]);

  return (
    <>
      {movies.length === 0 ? (
        <Backdrop className={css.backdrop} open>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          <Typography variant="h6" className={css.title}>
            {title}
          </Typography>
          <div className={css.posters}>
            {movies.map(movie => (
              <LightTooltip
                title={movie?.title || movie?.original_name || movie?.original_title}
                interactive
                leaveTouchDelay={500}
                key={movie.id}
                placement="top"
              >
                <div className={css.imgContainer}>
                  <img
                    height="200"
                    layout="fill"
                    objectfit="fill"
                    src={`${baseImgUrl}${movie.poster_path}`}
                    alt={movie.title}
                    className={css.poster}
                    onClick={() => router.push(`/movie/details/${movie.id}`)}
                  />
                </div>
              </LightTooltip>
            ))}
          </div>
        </>
      )}
    </>
  );
}

RowMovies.propTypes = {
  title: PropTypes.string.isRequired,
  fetchUrl: PropTypes.string.isRequired,
};
