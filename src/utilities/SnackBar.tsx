import { toast } from 'react-toastify';
import type { ToastContent, TypeOptions, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type SnackBarProps = {
  message: ToastContent;
  type?: TypeOptions;
  position?: ToastPosition;
};

function SnackBar({
  message,
  type = 'info',
  position = 'top-left',
}: SnackBarProps) {
  return toast(message, {
    type,
    position,
    autoClose: 1000,
    closeOnClick: true,
    className: `toast-${type}`,
  });
}

export default SnackBar;
