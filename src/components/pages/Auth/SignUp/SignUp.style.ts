import { makeStyles } from 'tss-react/mui';
import { theme } from '../../../../configurations/styles/Theme';

const useStyles = makeStyles()({
  container: {
    padding: 20,
    height: '50vh',
    minWidth: 300,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    backgroundColor: theme.palette.primary.dark,
  },
  button: {
    margin: '8px 0',
    backgroundColor: theme.palette.primary.main,
  },
});

export default useStyles;
