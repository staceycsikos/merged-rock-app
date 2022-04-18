import {Link} from "react-router-dom"

export default function NavBar() {
  const handleClick = () => {
  }
  
  return (
    <div>
      <Link to="/SignUp"><button>Sign Up</button></Link>
      <Link to="/SignIn"><button>Sign In</button></Link>
      <Link to="/SignOut"><button onClick={handleClick}>Sign Out</button></Link>
      
    </div>
  )
}
