import { Route, Routes } from "react-router-dom";
import "./App.css";
import TabbedAuthForm from "./components/global/TabbedAuthForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TabbedAuthForm />} />
      </Routes>
    </div>
  );
}

export default App;
