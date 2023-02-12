import { Route, Routes } from 'react-router-dom';
import TabbedAuthForm from './components/global/TabbedAuthForm';
import { ToastContainer } from 'react-toastify';
import NotFound from './components/pages/NotFound';

const App = (): JSX.Element => {
  //FIXME: Fix navbar, split it into logic, static and so on, implement types. Navbar must always be on top of screen

  // FIXME: layout not fitting entire screen

  // TODO: Make login / signup actually work. On signup auto login

  //FIXME: usereducer for auth calls to API?

  // TODO: implement first unit tests

  // TODO: add github stuff, block main from push, create dev branch, create pipeline, create github actions,
  //maybe auto deploy to netlify

  // TODO: implement route system

  return (
    <>
      <Routes>
        <Route path='/' element={<TabbedAuthForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
