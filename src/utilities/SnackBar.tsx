import { toast } from 'react-toastify';
import type { ToastContent, TypeOptions, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type SnackBarProps = {
  message: ToastContent;
  type?: TypeOptions;
  position?: ToastPosition;
  toastId: string;
};

function SnackBar({
  message,
  type = 'info',
  position = 'top-left',
  toastId,
}: SnackBarProps) {
  if (toast.isActive(toastId)) {
    return;
  }

  return toast(message, {
    type,
    position,
    autoClose: 1000,
    closeOnClick: true,
    className: `toast-${type}`,
    toastId,
  });
}

export default SnackBar;
