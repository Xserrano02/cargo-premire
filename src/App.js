import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import HomePage from "./Screens/HomePage";
import FormContact from "./Screens/FormContact";

export default function App() {
  return (

    /* Aqui agregegan las rutas de cada uno de las vistas */
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<FormContact />} />
        <Route path="*" element={<h2>Pagina no encontrada</h2>} />
      </Routes>
    </Router>
  );
}