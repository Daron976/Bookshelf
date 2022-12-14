import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  return (
    <div className="status-categories">
      <div>
        {categories.map((category) => (
          <p key={category}>
            {category}
          </p>
        ))}
      </div>
      <button
        type="button"
        id="update"
        name="update"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check Status
      </button>
    </div>
  );
};

export default Categories;
