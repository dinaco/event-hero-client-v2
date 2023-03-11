import { Fab } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import type { Event } from '../../../utilities/GlobalTypes';
import useAttendEventButton from './AttendEventButton.logic';

type Props = {
  attending: boolean;
  setAttending: (attending: boolean) => void;
  event: Event;
};

function AttendEventButton({ attending, setAttending, event }: Props) {
  /*   const AttendEventToggle = () => {
    setAttending(!attending);
    changeAttendingStatus();
  }; */

  const { changeAttendingStatus } = useAttendEventButton({
    attending,
    setAttending,
    event,
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
