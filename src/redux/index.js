// реекспорт

export * as sliceContacts from './sliceContacts';
export * as sliceFilter from './sliceFilter';

export {
  persistedContactsReducer,
  deleteMyContact,
  getContacts,
} from './sliceContacts';
export { filterReducer, getFilter } from './sliceFilter';
