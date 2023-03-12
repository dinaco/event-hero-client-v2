import { useNavigate } from 'react-router-dom';
import { Fab } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function OrderButton({ disabled }: Record<string, boolean>) {
  const navigate = useNavigate();

  return (
    <Fab
      disabled={disabled}
      color='primary'
      variant='extended'
      onClick={() => navigate('order/')}
      size='large'
    >
      <AttachMoneyIcon />
      Order
    </Fab>
  );
}

export default OrderButton;
