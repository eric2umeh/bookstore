import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../component/Book';
import Button from '../component/Button';
import { getBooks } from '../redux/books/booksSlice';
import { categoriesActions } from '../redux/categories/categoriesSlice';
import './Categories.scss';

const Categories = () => {
  let { books } = useSelector((state) => state.books);
  const { categories } = useSelector((state) => state.books);
  const { activeCategory } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  if (activeCategory !== 'All categoriess') {
    books = books.filter((book) => book.category === activeCategory);
  }

  const handleCategory = (event) => {
    const activeButtons = event.target;
    const category = activeButtons.textContent;
    dispatch(categoriesActions.changeActiveCategory(category));
    const categoryButtons = activeButtons
      .closest('.header-buttons')
      .querySelectorAll('button');

    // Remove active class on All buttons
    categoryButtons.forEach((btnss) => {
      btnss.classList.remove('active');
    });

    // Add active class on active btn
    activeButtons.classList.add('active');
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="categories-wrapper row">
          <div className="header">
            <div className="header-buttons">
              <Button className="active" handleClick={handleCategory}>
                All categoryy
              </Button>
              {categories.map((cate) => (
                <Button key={cate} handleClick={handleCategory}>
                  {cate}
                </Button>
              ))}
            </div>
          </div>
          <div className="books">
            {books.map((bok) => (
              <Book
                key={bok.item_id}
                title={bok.title}
                author={bok.author}
                catgeory={bok.category}
                id={bok.item_id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
