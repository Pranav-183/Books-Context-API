import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "./Context/BooksContextProvider";
import Transitioner from './Transitioner'

const Edit = ({ setScroll }) => {
   const books = useContext(BooksContext)[0]

   useEffect(() => {
      setScroll(true)
   }, [])

   return (
      <Transitioner>
         <div className="edits">
            {books.map((book, i) => (
               <Link
                  to={`/edit/${book.id}`}
                  key={i}
                  className="editItem"
               >
                  <img src={process.env.PUBLIC_URL + book.img} alt="book img" />
                  <div className="editContainer">
                     <span>{book.book_name}</span>
                     <button to={`/edit/${book.id}`} className="editButton">Edit</button>
                  </div>
               </Link>
            ))}
         </div>
      </Transitioner>
   )
}
 
export default Edit;