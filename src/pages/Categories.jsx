import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../component/Button';
import { checkStatus, bookOrigin } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const { categories, message } = useSelector((state) => state.categories);
  const [isChecking, setIsChecking] = useState(false);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    setIsChecking(true);
    dispatch(checkStatus());
  };

  const handleCountry = () => {
    setIsChecking(true);
    dispatch(bookOrigin());
  };

  return (
    <div>
      <Button
        type="submit"
        value="Check status"
        handleClick={handleCheckStatus}
      >
        {isChecking ? 'Checking..' : 'Check Status'}
      </Button>
      <Button value="Categories by country" handleClick={handleCountry} />
      <div>{categories}</div>
      <div>{message}</div>
    </div>
  );
};

export default Categories;
