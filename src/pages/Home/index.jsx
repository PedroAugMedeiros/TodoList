import * as C from './styles';
import { useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { Navigate } from 'react-router-dom';

function Home() {
  const { usersList , getAll } = useApi()
  const [renderTodoList, setRenderTodoList] = useState(false)
  const [userId, setUserId ] = useState('')

  getAll();

  const handleClick = (id) => {
    console.log('hi sou handle click');
    setRenderTodoList(true)
    setUserId(`/TodoList:${id}`)
  };


  const Users = () => {
     return usersList.map((user, index) => {
      return (
        <C.User>
        <h3>{user.username}</h3>
        <button onClick={ () => handleClick(user.id) }>Go To List</button>
        </C.User>
      )
     })
  }
 
  if(renderTodoList) {
    return (
      <Navigate to={userId}/>
    )
  }

  return (
    <C.Home>
      <h1>TodoList</h1>
      <C.Title>
      <h2>Users</h2>
      </C.Title>
    <C.Users>
      {Users()}
      </C.Users>
    </C.Home>
  );
}

export default Home;
