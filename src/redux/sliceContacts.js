import { combineReducers, createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './sliceFilter';

const contactsInitialState = [
  { id: nanoid(5), name: 'Руслан Негода', number: '+380-93-494-08-30' },
  { id: nanoid(5), name: 'Hermione Kline', number: '645-17-19' },
  { id: nanoid(5), name: 'Eden Clements', number: '443-89-12' },
  { id: nanoid(5), name: 'Annie Copeland', number: '459-12-56' },
];

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
export const getContacts = state => state.contacts.contacts;

// ==================================================================
// збереження в localstorage за допомогою бібліотеки persist

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

// передаємо persistConfig та contactsSlice.reducer редбюсер тієї події яку треба в
// localstorege передати
export const persistedContactsReducer = persistReducer(
  persistConfig,
  rootReducer
);
