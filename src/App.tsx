import { Route, Routes } from "react-router-dom";
import TabbedAuthForm from "./components/global/TabbedAuthForm";

function App() {
  //TODO: Make login / signup actually work. On signup auto login

  //TODO: Create toastify component to handle messages

  //TODO: implement route system

  //TODO: implement first unit tests

  //TODO: enable prettier and eslint and pre commit husky

  //FIXME: layout not fitting entire screen

  //TODO: upgrade vite to 4.0

  return (
    <Routes>
      <Route path="/" element={<TabbedAuthForm />} />
    </Routes>
  );
}

export default App;
