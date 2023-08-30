import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Pages/Home/Home";
import './Styles/App.sass'
import 'animate.css'


export const App = () => {
  return (
  <div className="App">
    <Home />
  </div>
  );
};
