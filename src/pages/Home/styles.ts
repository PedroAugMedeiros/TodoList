import styled from 'styled-components';

export const Home = styled.div`
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

export const Users = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0;
width: 100%;
background-color: white;
padding: 5%;
padding-top: 0;
`

export const User = styled.div`
background-color: black;
width: 80%;
color: white;
border-radius: 10px;
margin-bottom: 5%;
text-align: center;
padding: 5%;

h1 {
  margin-top: 2%;
  font-size: 500%;
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
  font-size: 220%;
  border: solid 3px black;

  cursor: pointer;

  &:hover {
    color: #00DBAF;
  }
}
`;
