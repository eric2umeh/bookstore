const CHECK_STATUS = 'categories/CHECK_STATUS';

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

// Reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        isChecking: true,
        message: 'Under Construction',
      };

    default:
      return state;
  }
};

export { checkStatus };

export default categoriesReducer;
