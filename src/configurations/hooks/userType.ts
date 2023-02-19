import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import { useNavigate } from 'react-router-dom';

function IsStaff({ children }: any) {
  const { isLoggedIn, user, isLoading } = useContext(AuthContext);

  const navigate = useNavigate();

  if (!isLoggedIn || !user) navigate('/');

  if (user?.role !== 'event-staff') {
    return navigate('/');
  } else {
    return children;
  }
}

function IsCustomer({ children }) {
  const { isLoggedIn, user, isLoading } = useContext(AuthContext);

  const navigate = useNavigate();

  if (!isLoggedIn || user?.role !== 'customer') {
    return navigate('/');
  } else {
    return children;
  }
}

function IsAdmin({ children }) {
  const { isLoggedIn, user, isLoading } = useContext(AuthContext);

  const navigate = useNavigate();

  if (
    !isLoggedIn ||
    user?.role !== 'app-admin' ||
    user?.role !== 'event-admin'
  ) {
    return navigate('/');
  } else {
    return children;
  }
}
function IsPrivate({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  const navigate = useNavigate();

  if (!isLoggedIn) {
    return navigate('/');
  } else {
    return children;
  }
}

function IsAnon({ children }) {
  const { isLoggedIn, isLoading, user } = useContext(AuthContext);

  const navigate = useNavigate();

  if (!isLoggedIn) {
    return children;
  } else if (user?.role.includes('admin')) {
    return navigate('/admin');
  } else {
    return navigate('/my-account');
  }
}

export { IsStaff, IsCustomer, IsAdmin, IsPrivate, IsAnon, newStuff };
