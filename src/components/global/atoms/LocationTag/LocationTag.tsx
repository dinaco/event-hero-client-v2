import { Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { grey } from '@mui/material/colors';
import type { Location } from '../../../../utilities/GlobalTypes';

function LocationTag({ city, state, country }: Location) {
  return (
    <Stack direction='row' alignItems='center' spacing={0.5}>
      <LocationOnIcon sx={{ color: grey[500] }} />
      <Typography variant='body2' color='text.secondary'>
        {city}, {state} - {country}
      </Typography>
    </Stack>
  );
}

export default LocationTag;
