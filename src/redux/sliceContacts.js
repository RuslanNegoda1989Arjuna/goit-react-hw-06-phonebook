import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitualeState = [
  { id: nanoid(5), name: 'Лунная Роза', number: '071-0-232' },
  { id: nanoid(5), name: 'Hermione Kline', number: '645-17-19' },
  { id: nanoid(5), name: 'Eden Clements', number: '443-89-12' },
  { id: nanoid(5), name: 'Annie Copeland', number: '459-12-56' },
];

export const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: contactsInitualeState,
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
