import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../component/Button';
import { categoriesAction } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const { categories, message } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(categoriesAction.checkStatus());
  };

  const handleCountry = () => {
    dispatch(categoriesAction.bookOrigin());
  };

  return (
    <>
      <main>
        <Button type="submit" handleClick={handleCheckStatus}>
          Check Status
        </Button>
        <Button type="submit" handleClick={handleCountry}>
          Check Country
        </Button>
        <div>{categories}</div>
        <div>{message}</div>
      </main>
    </>
  );
};

export default Categories;
