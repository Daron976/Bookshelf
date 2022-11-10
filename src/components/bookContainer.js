import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './addBook';
import Books from './bookItem';

const BookContainer = () => {
  const books = useSelector((state) => state.bookReducer);
  return (
    <div>
      <section className="book-container">
        {books.map((book) => (
          <Books
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
      </section>
      <AddBook />
    </div>
  );
};

export default BookContainer;
