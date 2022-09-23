import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "./Context/BooksContextProvider";
import Transitioner from './Transitioner'

const Books = ({ setScroll }) => {
   const books = useContext(BooksContext)[0]

   useEffect(() => {
      setScroll(true)
   }, [])

   return (
      <Transitioner>
         <div className="books">
            {books.map((book, i) => (
               <Link
                  to={`/${book.id}`}
                  key={i}
                  className="bookItem"
               >
                  <img src={process.env.PUBLIC_URL + book.img} alt="book img" className="bookImg" />
                  <span stuff="text-[1.2rem] text-center">{book.book_name}</span>
               </Link>
            ))}
         </div>
      </Transitioner>
   )
}

export default Books;