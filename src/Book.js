import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "./Context/BooksContextProvider";
import Transitioner from './Transitioner'

const Book = () => {
   const { id } = useParams()
   const books = useContext(BooksContext)[0]
   const book = books.find(book => book.id.toString() === id)

   return (
      <Transitioner single={true}>
         <div className="h-full w-full flex justify-center items-center bg-zinc-800">
            <div className="w-4/5 h-4/5 bg-slate-700 mt-24 flex items-center">
               <img src={book.img} alt="book img" className="h-4/5 ml-40 mr-20" />
               <div className="info h-4/5 w-auto text-slate-100 text-2xl">
                  <div className="w-full flex my-5">
                     <div className="cursive">Title:&nbsp;&nbsp;</div>
                     <div>{book.book_name}</div>
                  </div>
                  <div className="w-full flex my-5">
                     <div className="cursive">Number of Pages:&nbsp;&nbsp;</div>
                     <div>{book.pages}</div>
                  </div>
                  <div className="w-full flex my-5">
                     <div className="cursive">Rating:&nbsp;&nbsp;</div>
                     <div>{book.rating}</div>
                  </div>
               </div>
            </div>
         </div>
      </Transitioner>
   )
}
 
export default Book;