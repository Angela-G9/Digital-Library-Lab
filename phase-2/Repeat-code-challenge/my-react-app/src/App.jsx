import React, { useState } from "react";
import BookList from "./Components/BookList";
import BookForm from "./Components/BookForm";
import SearchBar from "./Components/SearchBar";
import "./index.css";

const initialBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
  { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
];

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState("");

  // Add a new book
  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };

  // Delete a book
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Update a book
  const updateBook = (updatedBook) => {
    setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
    setEditingBook(null); // Reset editing state
  };


  // Filter books based on search term
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Digital Library</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BookForm addBook={addBook} editingBook={editingBook} updateBook={updateBook} />
      <BookList
        books={filteredBooks}
        deleteBook={deleteBook}
        setEditingBook={setEditingBook}
        searchTerm={searchTerm}
      />
      </div>
  );
}

export default App;