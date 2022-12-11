import { createSlice, nanoid } from '@reduxjs/toolkit';

// const contactsInitualeState = {
//   contacts: [
//     { id: nanoid(5), name: 'Rosie Simpson', number: '459-12-56' },
//     { id: nanoid(5), name: 'Hermione Kline', number: '443-89-12' },
//     { id: nanoid(5), name: 'Eden Clements', number: '645-17-79' },
//     { id: nanoid(5), name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };
const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: contactsInitialState,
  // Об'єкт редюсерів
  reducers: {
    addMyContact(state, action) {
      state.push(action.payload);
    },
    deleteMyContact(state, action) {
      return state.filter(el => el.id !== action.payload);
    },
  },
});

// Генератори екшенів
export const { addMyContact, deleteMyContact } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// selector ???
export const getContacts = state => state.contacts;
