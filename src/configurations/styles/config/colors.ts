import { withOpacity } from '../../../utilities/styleUtilities';

const colors = {
  primary: {
    main: '#1b67d0',
    dark: '#0653B6',
    light: '#d1e1f6',
  },
  secondary: {
    main: '#ff7600',
    light: '#FFE9D6',
    dark: '#E56E00',
  },
  textColors: {
    primary: '#2a2b38',
    primaryLight: withOpacity('#2a2b38', 0.7),
    primaryLighter: withOpacity('#2a2b38', 0.5),
    highlight: '#1b67d0',
    error: '#ea0849',
  },
};

export default colors;
