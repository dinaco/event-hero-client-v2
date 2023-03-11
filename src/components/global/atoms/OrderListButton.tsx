import { useNavigate } from 'react-router-dom';
import { Fab } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import type { Event } from '../../../utilities/GlobalTypes';

function OrderListButton({ event }: Record<string, Event>) {
  const navigate = useNavigate();

  return (
    <Fab
      color='primary'
      variant='extended'
      onClick={() => navigate(`/orders/${event.id}`)}
      size='large'
    >
      <FormatListBulletedIcon sx={{ mr: 1 }} />
      Orders
    </Fab>
  );
}

export default OrderListButton;
