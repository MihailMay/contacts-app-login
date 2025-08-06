import { createAction, createReducer } from '@reduxjs/toolkit';

// Дії
export const addContact = createAction('contacts/add');
export const deleteContact = createAction('contacts/delete');
export const updateFilter = createAction('filter/update');

// Початковий стан
const initialState = {
  items: [],
  filter: '',
};

// Редюсер
export const contactsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    })
    .addCase(updateFilter, (state, action) => {
      state.filter = action.payload;
    });
});

// Селектори
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;