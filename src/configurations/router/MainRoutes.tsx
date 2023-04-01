import { Routes, Route } from 'react-router-dom';

import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

import TabbedAuthForm from '../../components/pages/Auth/TabbedAuthForm';
import Navbar from '../../components/organism/Navbar/Navbar';
import MyAccount from '../../components/pages/MyAccount/MyAccount';
import NotFound from '../../components/pages/NotFound';
import SearchEvents from '../../components/pages/Home/SearchEvents/SearchEvents';
import AdminPage from '../../components/admin/AdminPage';
import Event from '../../components/pages/Event/Event';
import Profile from '../../components/pages/Profile/Profile';

const MainRoutes = () => (
  <Routes>
    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path='/' element={<Navbar />}>
      <Route path='/' element={<SearchEvents />} />
      <Route path='/event/:eventId' element={<Event />} />
      <Route path='/login' element={<PublicRoutes />}>
        <Route path='/login' element={<TabbedAuthForm />} />
      </Route>

      {/** Protected Routes */}
      {/** Wrap all Route under ProtectedRoutes element for each role */}
      <Route
        path='/'
        element={<ProtectedRoutes rolesRequired={['customer']} />}
      >
        <Route path='/my-account' element={<MyAccount />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
      <Route
        path='/'
        element={
          <ProtectedRoutes rolesRequired={['app-admin', 'event-admin']} />
        }
      >
        <Route path='/admin' element={<AdminPage />} />
      </Route>
    </Route>
    <Route path='*' element={<NotFound />} />
  </Routes>
);

export default MainRoutes;
