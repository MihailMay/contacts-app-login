export const SET_FILTER = 'filter/set';

const initialState = '';

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export const setFilter = value => ({
  type: SET_FILTER,
  payload: value,
});