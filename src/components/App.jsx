// import { nanoid } from 'nanoid';
import React from 'react';
import { PhonebookContainer, Title, TitleCont } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import { load, save } from '../LocalStorage/LocalStorage';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
// ===============================================================
import { useDispatch, useSelector } from 'react-redux';
import { deleteMyContact, getContacts } from 'redux/sliceContacts';
import { filterContacts, getFilter } from 'redux/sliceFilter';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // додавання в  localStorage

  // useEffect(() => {
  //   save('contacts', contacts);
  // }, [contacts]);

  const deleteContact = idContact => {
    dispatch(deleteMyContact(idContact));
  };

  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  // фільтруємо контакти, filter нормалізуємо,
  //  щоб на кажній ітерації не викликати ловерКейс

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div>
      <Title>PhoneBook</Title>

      <PhonebookContainer>
        <PhonebookForm />
      </PhonebookContainer>
      <TitleCont>Contacts</TitleCont>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};
