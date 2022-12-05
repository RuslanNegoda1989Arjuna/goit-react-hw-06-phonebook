import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

// export const addContact = createAction('Contact/addContact');
// export const deleteContact = createAction('Contact/deleteContact');

const contactsReducer = createReducer([], {
  // [addContact]: (state, action) => state.push(action.payload),
  // [deleteContact]: (state, action, idContact) =>
  //   state.filter(contact => contact.id !== idContact),
});

export const store = configureStore({
  contacts: contactsReducer,
});
