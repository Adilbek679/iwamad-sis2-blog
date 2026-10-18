import { NavLink } from 'react-router'
import { useAuth } from '../context/AuthContext'
import logo from '../assets/logo.svg'
import Button from './ui/Button'

function Header() {
  const { signedIn, signOut } = useAuth()

  return (
    <header className="site-head">
      <div className="brand">
        <img src={logo} alt="" width={32} height={32} />
        <span className="brand-name">Adilbek's Dev Blog</span>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/liked">Liked</NavLink>
        {signedIn ? (
          <Button variant="secondary" onClick={signOut}>Sign out</Button>
        ) : (
          <NavLink to="/signin">Sign in</NavLink>
        )}
      </nav>
    </header>
  )
}

export default Header
