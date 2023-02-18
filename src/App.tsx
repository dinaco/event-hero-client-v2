import { Route, Routes } from 'react-router-dom';
import TabbedAuthForm from './components/global/TabbedAuthForm';
import { ToastContainer } from 'react-toastify';
import NotFound from './components/pages/NotFound';
import { IsAnon, IsPrivate } from './configurations/authetication/userType';
import Navbar from './components/organism/Navbar/Navbar';
import MyAccount from './components/pages/MyAccount';
import { useContext } from 'react';
import { AuthContext } from './context/auth.context';

const App = (): JSX.Element => {
  const { isLoggedIn, user, isLoading } = useContext(AuthContext);

  // console.log(isLoggedIn, user, isLoading);
  // TODO: Make login / signup actually work. On signup auto login

  //TODO: Change it to graphQL/Apollo?

  //FIXME: Fix navbar, split it into logic, static and so on, implement types. Navbar must always be on top of screen

  // FIXME: layout not fitting entire screen

  //FIXME: usereducer for auth calls to API?

  // TODO: implement first unit tests

  // TODO:  (not sure if possible on free tier with private repo) add github stuff, block main from push, create dev branch, create pipeline, create github actions,
  //maybe auto deploy to netlify

  // TODO: implement route system

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <IsAnon>
              <TabbedAuthForm />
            </IsAnon>
          }
        />
        <Route
          path='/my-account/'
          element={
            <IsPrivate>
              <Navbar />
              <MyAccount />
            </IsPrivate>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
