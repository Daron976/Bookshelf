import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBookItem } from '../redux/books/books';

const AddBook = () => {
  const [titleValue, setTitleValue] = useState('');

  const [authorValue, setAuthorValue] = useState('');

  const [categoryValue, setCategoryValue] = useState('');

  const titleInput = (e) => {
    setTitleValue(e.target.value);
  };

  const categoryInput = (e) => {
    setCategoryValue(e.target.value);
  };

  const authorInput = (e) => {
    setAuthorValue(e.target.value);
  };

  const dispatch = useDispatch();

  const obj = {
    item_id: uuidv4(),
    title: titleValue,
    author: authorValue,
    category: categoryValue,
  };
  return (
    <section className="add-book">
      <h1>Add a new book</h1>
      <form action="" className="form-data">
        <input
          type="text"
          id="title"
          name="title"
          onChange={titleInput}
          value={titleValue}
          placeholder="BookTitle"
        />
        <input
          type="text"
          id="author"
          name="author"
          onChange={authorInput}
          value={authorValue}
          placeholder="Author"
        />
        <input
          type="text"
          id="author"
          name="author"
          onChange={categoryInput}
          value={categoryValue}
          placeholder="Genre"
        />
        <button
          onClick={() => {
            dispatch(postBookItem(obj));
          }}
          type="button"
          name="add"
          id="add"
        >
          Add Book
        </button>
      </form>
    </section>
  );
};

export default AddBook;
