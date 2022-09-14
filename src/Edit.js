import { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "./Context/BooksContextProvider";
import Transitioner from './Transitioner'

const Edit = () => {
   const books = useContext(BooksContext)[0]

   return (
      <Transitioner>
         <div className="grid grid-cols-2 gap-10 ml-40 mt-10 text-zinc-100 pt-24">
            {books.map((book, i) => (
               <Link to={`/edit/${book.id}`} key={i} className="bg-zinc-600 h-[25vh] flex w-[35vw] text-[1.2rem] overflow-ellipsis whitespace-nowrap px-3 py-2 cursor-pointer transition-all duration-200 hover:scale-[1.05]">
                  <img src={`${book.img}`} alt="book img" className="h-full" />
                  <div className="h-full w-full flex flex-col justify-center items-center gap-3">
                     <span>{book.book_name}</span>
                     <button to={`/edit/${book.id}`} className="px-2 w-1/3 bg-zinc-500 ml-2">Edit</button>
                  </div>
               </Link>
            ))}
         </div>
      </Transitioner>
   )
}
 
export default Edit;