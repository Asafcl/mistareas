import "./App.css";
import Logo from "./componentes/asaf_logo";
import ListaDeTareas from './componentes/ListaDeTareas'

function App() {
  
  return (
    <div className="misTareas">
      <div className="logoCont">
        <Logo />
      </div>
      <div className="tareasCont">
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
       
      </div>
    </div>
  );
}

export default App;
