import { Routes, Route } from 'react-router-dom';

import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

import TabbedAuthForm from '../../components/global/TabbedAuthForm';
import Navbar from '../../components/organism/Navbar/Navbar';
import MyAccount from '../../components/pages/MyAccount';
import NotFound from '../../components/pages/NotFound';

const MainRoutes = () => (
  <Routes>
    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path='/' element={<PublicRoutes />}>
      <Route path='/' element={<TabbedAuthForm />} />
    </Route>

    {/** Protected Routes */}
    {/** Wrap all Route under ProtectedRoutes element */}
    <Route path='/' element={<ProtectedRoutes />}>
      <Route path='/' element={<Navbar />}>
        <Route path='/my-account/' element={<MyAccount />} />
        {/*  <Route path='/' element={<Navigate replace to='dashboard' />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route
          path='tabs'
          element={<Tabs props={{ userName: 'Bikash web' }} />}
          <Route path='/tabs' element={<Navigate replace to='tab1' />} />
          <Route path='tab1' element={<Tab1 />} />
          <Route path='tab2' element={<ProtectedRoutes roleRequired='USER' />}>
            <Route path='/tabs/tab2' element={<Tab2 />} />
          </Route>
          <Route path='tab3' element={<Tab3 />} />
        </Route>
        <Route path='settings' element={<Settings />} />
        <Route path='dynamic-form' element={<DynamicForm />} />
        <Route
          path='users'
          element={<Users extraItem='test extra item from router' />}
        />
        <Route path='users/:userId' element={<SingleUser />} />
        <Route path='users/new' element={<NewUser />} /> */}
      </Route>
    </Route>
    <Route path='*' element={<NotFound />} />
    {/** Permission denied route */}
    {/* <Route path='/denied' element={<PermissionDenied />} /> */}
  </Routes>
);

export default MainRoutes;
