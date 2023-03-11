import { useContext } from 'react';
import { AuthContext } from '../../../context/auth.context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Fab } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import type { Event } from '../../../utilities/GlobalTypes';

type Props = {
  attending: boolean;
  setAttending: (attending: boolean) => void;
  event: Event;
};

function AttendEventButton({ attending, setAttending, event }: Props) {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const changeAttendingStatus = () => {
    if (user) {
      const body = { attending };
      const getToken = localStorage.getItem('authToken');
      axios
        .put(`${process.env.VITE_BASE_URL}/api/event/${event.id}`, body, {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        })
        .then((response) => {
          setAttending(!attending);
          navigate(`/event/${event.id}`);
        })
        .catch((err) => console.log(err));
    } else {
      navigate(`/`);
    }
  };

  /*   const AttendEventToggle = () => {
    setAttending(!attending);
    changeAttendingStatus();
  }; */

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
