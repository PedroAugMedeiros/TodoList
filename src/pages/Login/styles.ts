import styled from 'styled-components';

export const Login = styled.div`
display: flex;
flex-direction: column;
width: 100%;
font-family: sans-serif;
border-radius: 10px;
padding: 5%;
background-color: white;
color: black;
justify-content: center;
align-items: center;


h1 { 
  margin-top: 10%;
  margin-bottom: 0%;
  text-align: center;
  font-size: 250%;
}

h2 {
  margin: 2%;
}

form { 
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
}

input {
  margin-bottom: 5%;
  border-radius: 10px;
  padding: 5%;
  border: solid; 3px black;
  font-size: 150%;
}

img { 
  width: 90%;
  margin-right: 5%;
}

button {

}

.buttonDisabled {
  background-color: white;
  color: black;
  padding: 5%;
  font-size: 150%;
}

.buttonEnabled {
  background-color: black;
  color: white;
  padding: 5%;
  border-radius: 10px;
  border: solid; 3px black;
  font-size: 150%;
}
`;
