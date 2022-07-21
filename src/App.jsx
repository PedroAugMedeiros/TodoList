import * as C from './App.styles' 
import {
  Routes,
  Route
} from 'react-router-dom';

import Login from './pages/Login/Login';

function App() {

  return (
    <C.MainContainer>
      <Routes> 
      <Route exact path="/" element={ <Login />} />
    </Routes> 
    </C.MainContainer>  
  );
}

export default App;
