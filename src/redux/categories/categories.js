const CHECK_STATUS = 'CHECK_STATUS';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [
        ...state,
        {
          text: action.text,
        },
      ];
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
  text: 'Under construction',
});

export default categoriesReducer;
