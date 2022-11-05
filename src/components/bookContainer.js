import React from 'react';
import AddBook from './addBook';
import Books from './books';

const BookContainer = () => (
  <div>
    <section className="book-container">
      <Books
        author="Suzanne Collins"
        title="The Hunger Games"
      />
      <Books
        author="Leo Toystoy"
        title="Anna Karenina"
      />
      <Books
        author="Franck Herbert"
        title="Dune"
      />
    </section>
    <AddBook />
  </div>
);

export default BookContainer;
