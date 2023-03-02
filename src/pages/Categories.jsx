import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../component/Book';
import { getBooks } from '../redux/books/booksSlice';
import { categoriesActions } from '../redux/categories/categoriesSlice';
import './Categories.scss';

const Categories = () => {
  let { books } = useSelector((state) => state.books);
  const { categories } = useSelector((state) => state.books);
  const { activeCategory } = useSelector((state) => state.categories);

  if (activeCategory !== 'All categoriess') {
    books = books.filter((book) => book.category === activeCategory);
  }

  const dispatch = useDispatch();

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
    <div>
      <div className="categories-wrapper row">
        <div className="header">
          <div className="header-buttons">
            <button type="button" className="active" onClick={handleCategory}>
              All categoryy
            </button>
            {categories.map((cate) => (
              <button type="button" key={cate} onClick={handleCategory}>
                {cate}
              </button>
            ))}
          </div>
        </div>
        <div className="books">
          {books.map((bok) => (
            <Book
              key={bok.item_id}
              title={bok.title}
              author={bok.author}
              category={bok.category}
              id={bok.item_id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
