import { ToastContainer } from 'react-toastify';
import MainRoutes from './configurations/router/MainRoutes';

const App = (): JSX.Element => {
  //TODO: Check where useeffect, usememo and usecallback are missing. usenavigate should be used inside useeffect?

  //FIXME: Fix navbar, split it into logic, static and so on, implement types. Navbar must always be on top of screen

  //FIXME: fix mui errors, my-account and 404 page

  //TODO: add Event List to homepage

  // FIXME: layout not fitting entire screen

  //FIXME: usereducer for auth calls to API?

  // TODO: implement first unit tests

  // TODO:  (not sure if possible on free tier with private repo) add github stuff, block main from push, create dev branch, create pipeline, create github actions,
  //maybe auto deploy to netlify

  //TODO: Change it to graphQL/Apollo?

  //TODO: change to aws infrastructure like cognito, dynamodb, sqs, sns, opensearch

  return (
    <>
      <MainRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
