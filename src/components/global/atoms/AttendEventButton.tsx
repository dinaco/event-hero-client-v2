import { Fab } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import useAttendEventButton from './AttendEventButton.logic';
import type { AttendingEventProps } from './AttendEventButton.logic';

function AttendEventButton({
  attending,
  setAttending,
  orders,
  id,
}: AttendingEventProps) {
  /*   const AttendEventToggle = () => {
    setAttending(!attending);
    changeAttendingStatus();
  }; */

  const { changeAttendingStatus } = useAttendEventButton({
    attending,
    setAttending,
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
