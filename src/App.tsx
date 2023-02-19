import { ToastContainer } from 'react-toastify';
import MainRoutes from './configurations/router/MainRoutes';

const App = (): JSX.Element => {
  //TODO: improve userType logic and routing system

  //TODO: Change it to graphQL/Apollo?

  // Check where useeffect, usememo and usecallback are missing. usenavigate should be used inside useeffect?

  //FIXME: Fix navbar, split it into logic, static and so on, implement types. Navbar must always be on top of screen

  //FIXME: fix mui errors, my-account and 404 page

  // FIXME: layout not fitting entire screen

  //FIXME: usereducer for auth calls to API?

  // TODO: implement first unit tests

  // TODO:  (not sure if possible on free tier with private repo) add github stuff, block main from push, create dev branch, create pipeline, create github actions,
  //maybe auto deploy to netlify

  // TODO: implement route system

  return (
    <>
      <MainRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
