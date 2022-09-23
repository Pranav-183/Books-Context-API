import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BooksContext } from "./Context/BooksContextProvider";
import Transitioner from './Transitioner';

const EditOne = ({ setScroll }) => {
   const { editid } = useParams()
   const navigate = useNavigate()
   const books = useContext(BooksContext)[0] || []
   const saveDataFunc = useContext(BooksContext)[1]
   const book = books.find(book => book.id.toString() === editid)

   useEffect(() => {
      setScroll(false)
   }, [])

   const [bookInfo, setBookInfo] = useState({
      book_name: book.book_name,
      pages: book.pages,
      rating: book.rating
   })

   const [changes, setChanges] = useState(0)

   const incrementChanges = () => {
      setChanges(prevChanges => prevChanges + 1)
   }

   const saveChanges = e => {
      if (e._reactName === 'onClick') {
         e.preventDefault()
         saveDataFunc(bookInfo, editid - 1)
         navigate('/edit')
      } else if (e._reactName === 'onKeyUp') {
         if (e.key === 'Enter') {
            saveDataFunc(bookInfo, editid - 1)
            navigate('/edit')
         }
      }
   }

   const changeBookInfo = e => {
      if (e.target.classList.contains('book_name')) {
         setBookInfo(prevState => ({
            ...prevState,
            book_name: e.target.value
         }))
         incrementChanges()
      } else if (e.target.classList.contains('pages')) {
         setBookInfo(prevState => ({
            ...prevState,
            pages: e.target.value
         }))
         incrementChanges()
      } else if (e.target.classList.contains('rating')) {
         setBookInfo(prevState => ({
            ...prevState,
            rating: e.target.value
         }))
         incrementChanges()
      }
   }

   return (
      <Transitioner>
         <div className="oneContainer h-full w-full flex justify-center pt-20 bg-zinc-800">
            <div className="w-4/5 h-4/5 bg-slate-700 flex items-center relative">
               <img src={process.env.PUBLIC_URL + book.img} alt="book img" className="h-4/5 ml-40 mr-20" />
               <div className="info h-4/5 w-auto text-slate-100 text-2xl">
                  <div className="w-full flex my-5">
                     <div className="cursive">Title:&nbsp;&nbsp;</div>
                     <div>{bookInfo.book_name}</div>
                  </div>
                  <div className="w-full flex my-5">
                     <div className="cursive">Number of Pages:&nbsp;&nbsp;</div>
                     <div>{bookInfo.pages}</div>
                  </div>
                  <div className="w-full flex my-5">
                     <div className="cursive">Rating:&nbsp;&nbsp;</div>
                     <div>{bookInfo.rating}</div>
                  </div>
               </div>
               <div className="toEdit h-4/5 w-auto text-slate-100 text-2xl absolute left-[580px] top-[290px]">
                  <div className="w-full flex my-5">
                     <div className="cursive">New Title:&nbsp;&nbsp;</div>
                     <input type="text" onChange={changeBookInfo} onKeyUp={saveChanges} defaultValue={bookInfo.book_name} className="book_name text-black text-xl w-[450px] p-2" />
                  </div>
                  <div className="w-full flex my-5">
                     <div className="cursive">New Number of Pages:&nbsp;&nbsp;</div>
                     <input type="text" onChange={changeBookInfo} onKeyUp={saveChanges} defaultValue={bookInfo.pages} className="pages text-black text-xl w-[100px] p-2" />
                  </div>
                  <div className="w-full flex my-5">
                     <div className="cursive">New Number of Ratings:&nbsp;&nbsp;</div>
                     <input type="text" onChange={changeBookInfo} onKeyUp={saveChanges} defaultValue={bookInfo.rating} className="rating text-black text-xl w-[100px] p-2" />
                  </div>
                  <button
                     disabled={changes === 0}
                     className="bg-cyan-600 rounded-full p-3 disabled:cursor-not-allowed disabled:hover:bg-cyan-600 hover:bg-cyan-700 transition-all duration-200 ease-in-out"
                     onClick={saveChanges}>
                     Save Changes
                  </button>
               </div>
            </div>
         </div>
      </Transitioner>
   )
}

export default EditOne;