import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../component/Button';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const { categories, message } = useSelector((state) => state.categories);
  const [isChecking, setIsChecking] = useState(false);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    setIsChecking(true);
    dispatch(checkStatus());
  };

  return (
    <div>
      <Button type="submit" handleClick={handleCheckStatus}>
        {isChecking ? 'Checking..' : 'Check Status'}
      </Button>
      <div>{categories}</div>
      <div>{message}</div>
    </div>
  );
};

export default Categories;
