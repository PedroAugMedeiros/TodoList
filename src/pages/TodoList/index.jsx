import * as C from './styles';
import { useState } from 'react'
import Header from '../../components/Header';
import { useParams } from 'react-router';

function TodoList() {

  const { userId } = useParams();
  const [tasks, setTasks] = useState('');
  const [inputValue, setValueInput ] = useState('') ;
  const [blockGetStorage, setBlockGetStorage ] = useState(true) ;
  
  const handleChange = (valueInput) => {
    const newUserList = JSON.parse(localStorage.getItem(userId));
    setValueInput(valueInput);
    if(newUserList !== null) {
      setTasks(newUserList);
    }
  }

  const handleClick = () => {
    setTasks(prevState => [...prevState, inputValue])
    setBlockGetStorage(false);
  }

  const ListTasks = () => {
    if(blockGetStorage === false) {
      localStorage.setItem(`${userId}`, JSON.stringify(tasks))
    }
    
    const userListTask = JSON.parse(localStorage.getItem(userId));
    console.log(userListTask)  
    if(userListTask !== null) {
    return userListTask.map((task)=>{
      return (
        <h1>{task}</h1>
      )
    })
  }

  return (
    <h1>No tasks</h1>
  )

  }
  
  return (
    <C.TodoList>
      <Header/>
      <C.AddTask>
        <C.Input 
        onChange={({target})=> handleChange(target.value)}
        placeholder='Adicione uma nova tarefa'/>
            <C.Button
            onClick={() => handleClick() }>
              Add Tarefa
            </C.Button>
      </C.AddTask>
      <C.Tasks>
        { ListTasks()}
      </C.Tasks>
    </C.TodoList>
);
}

export default TodoList;
