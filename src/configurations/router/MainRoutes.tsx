import { Routes, Route } from 'react-router-dom';

import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

import TabbedAuthForm from '../../components/global/TabbedAuthForm';
import Navbar from '../../components/organism/Navbar/Navbar';
import MyAccount from '../../components/pages/MyAccount';
import NotFound from '../../components/pages/NotFound';
import EventList from '../../components/pages/EventList';
import AdminPage from '../../components/admin/AdminPage';

const MainRoutes = () => (
  <Routes>
    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path='/' element={<Navbar />}>
      <Route path='/' element={<EventList />} />
      <Route path='/login' element={<PublicRoutes />}>
        <Route path='/login' element={<TabbedAuthForm />} />
      </Route>

      {/** Protected Routes */}
      {/** Wrap all Route under ProtectedRoutes element for each role */}
      <Route
        path='/'
        element={<ProtectedRoutes rolesRequired={['customer']} />}
      >
        <Route path='/my-account/' element={<MyAccount />} />
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