export const ADD_CONTACT = 'contacts/add';
export const DELETE_CONTACT = 'contacts/delete';

const initialState = {
  items: [],
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    default:
      return state;
  }
};

export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});