import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import AddBook from './addBook';
import Books from './bookItem';

const BookContainer = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookReducer);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div>
      <section className="book-container">
        <ul className="book-list">
          {books.map((book) => (
            <Books
              key={Math.random()}
              title={book.title}
              author={book.author}
              id={book.id}
            />
          ))}
        </ul>
      </section>
      <AddBook />
    </div>
  );
};

export default BookContainer;
