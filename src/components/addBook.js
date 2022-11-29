import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBookItem } from '../redux/books/books';

const AddBook = () => {
  const [titleValue, setTitleValue] = useState('');

  const [authorValue, setAuthorValue] = useState('');

  const [categoryValue, setCategoryValue] = useState('');

  const dispatch = useDispatch();

  const obj = {
    item_id: uuidv4(),
    title: titleValue,
    author: authorValue,
    category: categoryValue,
  };

  const titleInput = (e) => {
    setTitleValue(e.target.value);
  };

  const categoryInput = (e) => {
    setCategoryValue(e.target.value);
  };

  const authorInput = (e) => {
    setAuthorValue(e.target.value);
  };

  const initialValue = () => {
    if ((titleValue === '') || (categoryValue === '') || (authorValue === '')) {
      alert('All fields are required'); //eslint-disable-line
    } else {
      dispatch(postBookItem(obj));
      setTitleValue('');
      setAuthorValue('');
      setCategoryValue('');
    }
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
          required
        />
        <input
          type="text"
          id="author"
          name="author"
          onChange={authorInput}
          value={authorValue}
          placeholder="Author"
          required
        />
        <input
          type="text"
          id="author"
          name="author"
          onChange={categoryInput}
          value={categoryValue}
          placeholder="Genre"
          required
        />
        <div className="btn-width">
          <button
            onClick={() => {
              initialValue();
            }}
            type="button"
            name="add"
            id="add"
          >
            Add Book
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddBook;
