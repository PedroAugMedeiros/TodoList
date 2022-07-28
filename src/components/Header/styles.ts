import styled from 'styled-components';

export const Header = styled.header`
display: flex;
width: 100%;
background-color: white;
font-family: sans-serif;
color: black;
justify-content: flex-start;
align-items: center;
font-family: sans-serif;
margin-left: 5%;

h3 {
  color: black;
  list-style: none;
  margin-top: 5%;
  margin-bottom: 5%;
}

a {
  margin: 1%;
  width: 17%;
  text-decoration: none;
  border-right: 2px solid black; 
  color: inherit; 
  &:hover
}
`;
