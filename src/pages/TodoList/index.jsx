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
    if(valueInput !== null && valueInput !== ''){
      setValueInput(valueInput);
    }
    if(newUserList !== null) {
      setTasks(newUserList);
    }
  }
  
  const handleClickTasks = (id,status) => {
    const selectedTask = document.getElementById(`${id}`)
    
    const convertNodeListInArray = [...selectedTask.classList];
    
    const removeStatus = convertNodeListInArray.some((el)=> el === status)

    if(removeStatus) {
      selectedTask.classList.remove(status)
    } else
    if(status === 'Pending'){
      selectedTask.classList.remove('Completed')
      selectedTask.classList.add(`${status}`)
    } else if(status === 'Completed'){
      selectedTask.classList.remove('Pending')
      selectedTask.classList.add(`${status}`)
    }
   
  }

  const handleClick = () => {
    if(inputValue !== null && inputValue !== ''){
      setTasks(prevState => [...prevState, inputValue])
      setBlockGetStorage(false);
    }

    setValueInput('');
  }

  const ListTasks = () => {
    if(blockGetStorage === false) {
      localStorage.setItem(`${userId}`, JSON.stringify(tasks))
    }
    
    const userListTask = JSON.parse(localStorage.getItem(userId));
      
    if(userListTask !== null) {
    return userListTask.map((task, index)=> {
      return (
        <C.Task id={index}>
        <h1>{task}</h1>
        <C.TaskButtons>
      <C.TaskButton className='buttonCompleted' 
      id={index} onClick={({target}) => handleClickTasks(target.id,'Completed') }>Concluido</C.TaskButton>
      <C.TaskButton 
      className='buttonPending' id={index} onClick={({target}) => handleClickTasks(target.id,'Pending') }>Pendente</C.TaskButton>
        </C.TaskButtons>
        </C.Task>
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
        value={inputValue}
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
