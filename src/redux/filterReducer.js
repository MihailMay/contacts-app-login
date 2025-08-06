import { createAction, createReducer } from '@reduxjs/toolkit';

export const updateFilter = createAction('filter/update');

const initialState = '';

export const filterReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateFilter, (_, action) => {
    return action.payload;
  });
});