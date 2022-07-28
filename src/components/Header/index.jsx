import * as C from './styles';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <C.Header>
       <Link  to="/Home"><h3>Home</h3></Link>
    </C.Header>
  )
}

export default Header;
