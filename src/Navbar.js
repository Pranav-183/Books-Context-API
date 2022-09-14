import { Link } from "react-router-dom";
import Transitioner from './Transitioner'

const Navbar = () => {
   return (
      <Transitioner>
         <div className="w-full h-20 bg-zinc-700 flex pl-[10%] text-zinc-100 fixed top-0">
            <Link to="/"><img src="/Books.png" alt="books" className="h-4/5 pl-2 pt-3" /></Link>
            <Link to="/" className="text-2xl pl-7 pt-6">Home</Link>
            <Link to="/edit" className="text-2xl pl-10 pt-6">Edit</Link>
            <Link to="/about" className="text-2xl pl-10 pt-6">About</Link>
         </div>
      </Transitioner>
   )
}
 
export default Navbar;