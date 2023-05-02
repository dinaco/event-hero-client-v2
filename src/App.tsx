import { ToastContainer } from 'react-toastify';
import MainRoutes from './configurations/router/MainRoutes';
import { Suspense } from 'react';
import LoadingImg from './components/global/atoms/LoadingImg';

const App = () => {
  {
    /* <ListButton
          {...entityInformation.optionProps}
          rightIcon={
            <Checkbox
              onChange={() => onClick(CatalogTableCommonColumns.EntityInformation)}
              checked={entityInformation.settings.show}
            /> */
  }

  //FIXME: bug on private routes, when reloding on profile page it redirects to my-account

  //TODO: Emptystate component

  //TODO: useMemo or usecallback on attending button?

  //TODO: create makestyles/usestyles for myaccount children and check the rest, use login and signup as reference

  //TODO: Check where useeffect, usememo and usecallback are missing. usenavigate should be used inside useeffect?

  //FIXME: Fix navbar, split it into logic, static and so on, implement types. Navbar must always be on top of screen

  //FIXME: fix mui errors, my-account and 404 page

  // FIXME: layout not fitting entire screen

  //FIXME: usereducer for auth calls to API?

  // TODO: implement first unit tests

  // TODO:  (not sure if possible on free tier with private repo) add github stuff, block main from push, create dev branch, create pipeline, create github actions,
  //maybe auto deploy to netlify

  //TODO: change to aws infrastructure like cognito, dynamodb, sqs, sns, opensearch

  //FIXME: fix typescript error profile page and implement image upload system

  return (
    <>
      <Suspense fallback={<LoadingImg />}>
        <MainRoutes />
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default App;
