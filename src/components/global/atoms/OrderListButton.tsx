import { useNavigate } from 'react-router-dom';
import { Fab } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import type { Event } from '../../../utilities/GlobalTypes';

type Props = {
  disabled: boolean;
} & Pick<Event, 'id'>;

function OrderListButton({ disabled, id }: Props) {
  const navigate = useNavigate();

  return (
    <Fab
      disabled={disabled}
      color='primary'
      variant='extended'
      onClick={() => navigate(`/orders/${id}`)}
      size='large'
    >
      <FormatListBulletedIcon sx={{ mr: 1 }} />
      Orders
    </Fab>
  );
}

export default OrderListButton;
