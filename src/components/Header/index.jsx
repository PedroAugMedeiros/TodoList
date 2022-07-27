import * as C from './styles';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <C.Header>
       <Link  to="/Home"><h2>Home</h2></Link>
       <h1>TodoList</h1>
    </C.Header>
  )
}

export default Header;
