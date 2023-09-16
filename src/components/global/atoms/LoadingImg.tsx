import { Skeleton, Box } from '@mui/material';

function LoadingImg() {
  return (
    <Box my={2}>
      <Skeleton width={100} />
      <Skeleton width={150} animation='wave' />
      <Skeleton width={200} animation={false} />
    </Box>
  );
}

export default LoadingImg;
