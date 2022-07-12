import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(checkStatus());
  };
  const button = <button type="button" onClick={handleCheck}>Check status</button>;
  return (
    <div>
      {button}
      <div>{categories}</div>
    </div>
  );
};

export default Categories;
