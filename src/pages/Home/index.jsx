import * as C from './styles';
import { useApi } from '../../hooks/useApi';
import { Navigate } from 'react-router-dom';

function Home() {
  const { usersList , getAll } = useApi()
  
  getAll();

  const handleClick = () => {
    <Navigate to='/TodoList'/>
  };


  const Users = () => {
     return usersList.map((user, index) => {
      return (
        <C.User>
        <h3>{user.username}</h3>
        <button onClick={ handleClick }>Go To List</button>
        </C.User>
      )
     })
  }
 
  return (
    <C.Home>
     <h1>Todo List</h1>
    <C.Users>
    <h2>Users</h2>
      {Users()}
      </C.Users>
    </C.Home>
  );
}

export default Home;
