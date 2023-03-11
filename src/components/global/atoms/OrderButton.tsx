import { useNavigate } from 'react-router-dom';
import { Fab } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function OrderButton() {
  const navigate = useNavigate();

  return (
    <Fab
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
