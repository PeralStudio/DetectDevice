import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Android from './components/Android';
import Mac from './components/Mac';
import Windows from './components/Windows';
import General from './components/General';

function App() {

  // Cadena con datos del navegador cliente
  // let cadena = navigator.userAgent;
  // Esta es la palabra a buscar
  // let termino = "Android";
  // let termino1 = "Mac";
  // let termino2 = "Windows";
  // Buscar la palabra en la cadena
  // let posicion = cadena.indexOf(termino);
  // let posicion1 = cadena.indexOf(termino1);
  // let posicion2 = cadena.indexOf(termino2);

  // console.log(cadena.toLocaleLowerCase().match(/android/));


  return (
    navigator.userAgent.toLocaleLowerCase().match(/android/)
      ?
      <BrowserRouter>
        <Redirect to="/android" />
        <Route exact path='/android' component={Android} />
      </BrowserRouter>
      : navigator.userAgent.toLocaleLowerCase().match(/mac/)
        ?
        <BrowserRouter>
          <Redirect to="/mac" />
          <Route exact path='/mac' component={Mac} />
        </BrowserRouter>
        : navigator.userAgent.toLocaleLowerCase().match(/windows/)
          ?
          <BrowserRouter>
            <Redirect to="/windows" />
            <Route exact path='/windows' component={Windows} />
          </BrowserRouter>
          :
          <BrowserRouter>
            <Redirect to="/general" />
            <Route exact path='/general' component={General} />
          </BrowserRouter>
  );
}

export default App;