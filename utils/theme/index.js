import { createTheme } from '@material-ui/core/';
import { grey } from '@material-ui/core/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: {
      main: grey[900],
    },
  },
});
