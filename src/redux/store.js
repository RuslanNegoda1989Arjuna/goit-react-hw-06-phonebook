import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './sliceContacts';
import { filterReducer } from './sliceFilter';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

// передаємо persistConfig та contactsSlice.reducer редбюсер тієї події яку треба в
// localstorege передати
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
