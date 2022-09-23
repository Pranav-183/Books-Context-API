import { Link } from "react-router-dom";
import Transitioner from './Transitioner'

const Navbar = () => {
   return (
      <Transitioner>
         <div className="navbar">
            <Link to="/"><img src={process.env.PUBLIC_URL + "/images/Books.png"} alt="books" /></Link>
            <Link to="/" className="routes">Home</Link>
            <Link to="/edit" className="routes">Edit</Link>
            <Link to="/about" className="routes">About</Link>
         </div>
      </Transitioner>
   )
}
 
export default Navbar;