const CHECK_STATUS = 'categories/CHECK_STATUS';
const BOOK_ORIGIN = 'categories/BOOK_ORIGIN';

// Initial State
const initialState = {
  categories: [],
  isChecking: false,
  message: '',
};

// Actions
const checkStatus = () => ({
  type: CHECK_STATUS,
});

const bookOrigin = () => ({
  type: BOOK_ORIGIN,
});

// Reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        isChecking: true,
        message: 'Under Construction',
      };
    case BOOK_ORIGIN:
      return {
        ...state,
        country: action.payload,
        isChecking: false,
        categories: [...state.filter((cartegory) => cartegory.item_id !== action.item_id)],
      };

    default:
      return state;
  }
};

export { checkStatus, bookOrigin };

export default categoriesReducer;
