import './Navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className='logo'>
                SF_Park
            </div>
            <ul>
                <li><Link to='/' className='link'>Home</Link></li>
                <li><Link to='/' className='link'>Films</Link></li>
                <li><Link to='/' className='link'>Concept Arts</Link></li>
                <li><Link to='/' className='link'>Games</Link></li>
                <li><Link to='/' className='link'>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
