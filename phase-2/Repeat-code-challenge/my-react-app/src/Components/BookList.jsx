import React from "react";

function BookList({ books, deleteBook, setEditingBook, searchTerm }) {
  // Highlight search term in text
  const highlightText = (text, term) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <h3>{highlightText(book.title, searchTerm)}</h3>
          <p>Author: {highlightText(book.author, searchTerm)}</p>
          <p>Genre: {highlightText(book.genre, searchTerm)}</p>
          <div className="actions">
            <button onClick={() => setEditingBook(book)}>Edit</button>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;