import * as C from './App.styles' 
import {
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import TodoList from './pages/TodoList';

function App() {

  return (
    <C.MainContainer>
      <Routes> 
      <Route exact path="/" element={ <Home />} />
      <Route exact path="/Home" element={ <Home />} />
      <Route exact path="/TodoList:userId" element={ <TodoList />} />
    </Routes> 
    </C.MainContainer>  
  );
}

export default App;
