import { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "./Context/BooksContextProvider";
import Transitioner from './Transitioner'

const Books = () => {
   const books = useContext(BooksContext)[0]

   return (
      <Transitioner>
         <div className="grid grid-cols-3 gap-10 ml-20 mt-10 text-zinc-100 pt-24 overflow-y-auto">
            {books.map((book, i) => (
               <Link
                  to={`/${book.id}`}
                  key={i}
                  className="bg-zinc-600 h-[70vh] w-[25vw] flex justify-center items-center flex-col gap-3 cursor-pointer transition-all duration-200 hover:scale-[1.05]">
                  <img src={`${book.img}`} alt="book img" className="h-4/5" />
                  <span className="text-[1.2rem]">{book.book_name}</span>
               </Link>
            ))}
         </div>
      </Transitioner>
   )
}

export default Books;