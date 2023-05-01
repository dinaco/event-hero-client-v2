import { Fab } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import useAttendEventButton from './AttendEventButton.logic';
import type { AttendingEventProps } from './AttendEventButton.logic';

function AttendEventButton({ attending, orders, id }: AttendingEventProps) {
  const { changeAttendingStatus } = useAttendEventButton({
    attending,
    orders,
    id,
  });

  return (
    <Fab
      color={attending ? 'primary' : undefined}
      onClick={changeAttendingStatus}
      size='large'
      aria-label='favorite'
    >
      <LocalFireDepartmentIcon />
    </Fab>
  );
}

export default AttendEventButton;
