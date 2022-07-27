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

&:hover {
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
}
`;

export const Tasks = styled.section`
background-color: black;
width: 80%;
color: white;
border-radius: 10px;
margin-bottom: 5%;
text-align: center;
padding: 5%;

h1 {
  margin-top: 2%;
  font-size: 250%;
  border-bottom: 1px solid rgba(110, 110, 110, 0.9);
}

h3 {
  margin: 0;
  font-size: 230%;
  border-bottom: 1px solid rgba(110, 110, 110, 0.9);
}

button {
  background-color: black;
  color: green;
  width: 100%;
  font-size: 250%;
}
`;
