import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import HomePage from "./Screens/HomePage";
import FormContact from "./Screens/FormContact";
import Detalles from "./Screens/Detalles";
import Rastreo from "./Screens/Rastreo";
import Agencias from "./Screens/Agencias";


export default function App() {
  return (
    /* Aqui agregegan las rutas de cada uno de las vistas */
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<FormContact />} />
        <Route path="/detalles" element={<Detalles />} />
        <Route path="/rastreo" element={<Rastreo />} />
        <Route path="/Inicio-sesion" element={<Agencias />} />
        <Route path="*" element={<h2>Pagina no encontrada</h2>} />
        
      </Routes>
    </Router>
  );
}
