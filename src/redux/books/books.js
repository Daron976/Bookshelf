const defaultState = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'No Plan B',
    author: 'Lee Child',
  },
  {
    id: 3,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
];

const ADD_BOOK = 'Bookshlef/books/ADD_BOOK';
const REMOVE_BOOK = 'Bookshlef/books/REMOVE_BOOK';

const bookReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVE_BOOK:
      return state
        .filter((book) => (book.id !== action.id));
    default:
      return state;
  }
};

export const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  id,
  title,
  author,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookReducer;
