import { createReducer, createAction } from '@reduxjs/toolkit';

export const CHECK_STATUS = createAction('categories/check_status');

const initialState = {
  status: '',
};

const categoriesReducer = createReducer(initialState, (builder) => {
  builder.addCase(CHECK_STATUS, (state) => {
    const newStat = { ...state, status: 'Under construction' };

    return newStat;
  });
  builder.addDefaultCase((state) => state);
});

export default categoriesReducer;
