import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { grey } from '@mui/material/colors';
import type { Location } from '../../../../utilities/GlobalTypes';

function LocationTag({ city, state, country }: Location) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <LocationOnIcon sx={{ color: grey[500] }} />
      <Typography variant='body2' color='text.secondary'>
        {city}, {state} - {country}
      </Typography>
    </Box>
  );
}

export default LocationTag;
