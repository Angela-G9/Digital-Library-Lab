import React, { useState, useEffect } from "react";

function BookForm({ addBook, editingBook, updateBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  // Pre-fill form if editing a book
  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setGenre(editingBook.genre);
    } else {
      setTitle("");
      setAuthor("");
      setGenre("");
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !genre) return;

    const book = { title, author, genre };
    if (editingBook) {
      updateBook({ ...book, id: editingBook.id }); // Update existing book
    } else {
      addBook(book); // Add new book
    }

    setTitle("");
    setAuthor("");
    setGenre("");
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <button type="submit">{editingBook ? "Update Book" : "Add Book"}</button>
    </form>
  );
}

export default BookForm;