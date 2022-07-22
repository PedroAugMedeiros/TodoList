import * as C from './App.styles' 
import {
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {

  return (
    <C.MainContainer>
      <Routes> 
      <Route exact path="/Login" element={ <Login />} />
      <Route exact path="/" element={ <Home />} />
    </Routes> 
    </C.MainContainer>  
  );
}

export default App;
