import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="navbar-container" >
      <Link to='/'><h1>Exercices</h1></Link>
    </header>
  )
}

export default Navbar
