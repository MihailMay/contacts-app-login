import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    // ваші редюсери
  },
});

export const contactsReducer = contactsSlice.reducer;
// або
// export default contactsSlice.reducer;