import { Route, Routes } from 'react-router-dom';
import TabbedAuthForm from './components/global/TabbedAuthForm';
import { ToastContainer } from 'react-toastify';

const App = (): JSX.Element => {
  //FIXME: usereducer for auth calls to API?

  // TODO: add github stuff, block main from push, create dev branch, create pipeline, create github actions,
  //maybe auto deploy to netlify

  // TODO: Make login / signup actually work. On signup auto login

  // TODO: implement route system

  // TODO: implement first unit tests

  // TODO: enable prettier and eslint and pre commit husky

  // FIXME: layout not fitting entire screen

  // TODO: upgrade vite to 4.0

  return (
    <>
      <Routes>
        <Route path='/' element={<TabbedAuthForm />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
