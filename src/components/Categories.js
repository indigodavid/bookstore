import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(checkStatus());
  };
  const button = <button className="checkStatus" type="button" onClick={handleCheck}>Check status</button>;
  return (
    <div className="categories">
      {button}
      <h2>{categories}</h2>
    </div>
  );
};

export default Categories;
