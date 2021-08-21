import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Android from './components/Android';
import Mac from './components/Mac';
import Windows from './components/Windows';
import General from './components/General';

function App() {
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