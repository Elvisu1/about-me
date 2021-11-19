import css from './NavBar.module.css'
import { Link } from 'react-router-dom';
function NavBar(){
    return (
        <nav className={css.container}>
            <Link className={css['nav-link']} to='/'>
                Home
            </Link>
            <Link className={css['nav-link']} to='/about'>
                About me
            </Link>
            <Link className={css['nav-link']} to='/contact'>
                Contacts
            </Link>
        </nav>
    )
}
export default NavBar
