import { createContext, useState } from "react";

const defaultBooks = [
   {
      id: 1,
      book_name: "Harry Potter and The Philosopher's Stone",
      pages: 367,
      rating: 8,
      img: "/philosopher's stone.jpg"
   },
   {
      id: 2,
      book_name: "Harry Potter and The Chamber of Secrets",
      pages: 320,
      rating: 9,
      img: "/chamber of secrets.jpg"
   },
   {
      id: 3,
      book_name: "Harry Potter and The Prisoner of Azkaban",
      pages: 390,
      rating: 10,
      img: "/Prisoner.jpg"
   },
   {
      id: 4,
      book_name: "Harry Potter and The Goblet of Fire",
      pages: 450,
      rating: 7,
      img: "/goblet of fire.jpg"
   },
   {
      id: 5,
      book_name: "Harry Potter and The Order of The Phoenix",
      pages: 799,
      rating: 5,
      img: "/order.jpg"
   },
   {
      id: 6,
      book_name: "Harry Potter and The Half Blood Prince",
      pages: 678,
      rating: 8,
      img: "/half blood.jpg"
   },
   {
      id: 7,
      book_name: "Harry Potter and The Deathly Hallows",
      pages: 757,
      rating: 9,
      img: "/hallows.jpg"
   },
   {
      id: 8,
      book_name: "Percy Jackson and The Lightning Thief",
      pages: 370,
      rating: 7,
      img: '/lightning.jpg'
   },
   {
      id: 9,
      book_name: "Percy Jackson and The Sea Of Monsters",
      pages: 320,
      rating: 8,
      img: '/monsters.jpg'
   },
   {
      id: 10,
      book_name: "Percy Jackson and The Titan's Curse",
      pages: 400,
      rating: 8,
      img: '/titan.jpg'
   },
   {
      id: 11,
      book_name: "Percy Jackson and The Labyrinth",
      pages: 333,
      rating: 8,
      img: '/labyrinth.jpg'
   },
   {
      id: 12,
      book_name: "Percy Jackson and The Last Olympian",
      pages: 360,
      rating: 9,
      img: '/olympian.jpg'
   }
]

export const BooksContext = createContext([])

const BooksContextProvider = ({ children }) => {
   const [books, setBooks] = useState(
      JSON.parse(localStorage.getItem('books_react_context')) || defaultBooks
   )

   const saveData = (obj, index) => {
      const updatedBook = books[index]
      for (const property in obj) {
         updatedBook[property] = obj[property]
      }
      const updatedBooks = books
      updatedBooks[index] = updatedBook
      setBooks(updatedBooks)
   }

   return (
      <BooksContext.Provider value={[books, saveData]}>
         {children}
      </BooksContext.Provider>
   )
}

export default BooksContextProvider;