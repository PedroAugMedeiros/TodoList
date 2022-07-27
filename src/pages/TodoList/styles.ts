import styled from 'styled-components';

export const TodoList = styled.div`
display: flex;
flex-direction: column;
width: 100%;
background-color: black;
color: white;
justify-content: center;
align-items: center;
font-family: sans-serif;
h1 {
  font-size: 500%;
}

h2 {
  color: black;
  font-size: 400%;
}

.Pending {
  border: solid 2px red;
}

.Completed {
  border: solid 2px green;
}

`;

export const AddTask = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 0;
width: 100%;
background-color: white;
padding: 10%;

input:focus {
  outline: 0;
} 
`;

export const Input = styled.input`
width: 60%;
padding: 3%;
border: solid 5px black !important;
border-right: none;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
font-size: 240%;
box-shadow: 2px 2px 2px 2px black !important; 
color: black;
`;

export const Button = styled.button`
cursor: pointer;
width: 20%;
padding: 3%;
border: solid 5px black;
border-left: none;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
font-size: 120%;
color: white;
box-shadow: 2px 2px 2px 2px black; 
text-align: center;
background-color: black;
`;

export const Tasks = styled.section`
background-color: black;
width: 80%;
color: white;
border-radius: 10px;

padding: 5%;

h1 {
  width: 65%;
  margin-top: 2%;
  font-size: 200%;
}
`;

export const Task = styled.div`
  display: flex;
  font-size: 80%;  
  border: 3px solid white;
  border-radius: 10px;
  justify-content: space-between;
  paddig: 2%;
  margin-bottom: 5%;
  align-items: center;


  .Pending {
    border: 3px solid red !important;
    background-color: red;
  }

  h1 {
    margin: 0;
    padding: 3%;
    text-align: center;
  }
`;

export const TaskButtons = styled.div`
width: 30%;
display: flex;
flex-direction: column;
justify-content: space-around;
margin: 3%;

.buttonCompleted {
  background-color: green;
  border: solid 2px green;
} 

.buttonPending {
  background-color: red;
  border: solid 2px red !important;
} 

`;

export const TaskButton = styled.button`
cursor: pointer;
width: 100%;
padding: 3%;
border-radius: 10px;
font-size: 120%;
color: white;
box-shadow: 2px 2px 2px 2px black; 
text-align: center;
background-color: black;
margin: 3%;
`;
