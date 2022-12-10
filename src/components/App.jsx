// import { nanoid } from 'nanoid';
import React from 'react';
import { PhonebookContainer, Title, TitleCont } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import { load, save } from '../LocalStorage/LocalStorage';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';

export const App = () => {
  // додавання в  localStorage

  // useEffect(() => {
  //   save('contacts', contacts);
  // }, [contacts]);

  return (
    <div>
      <Title>PhoneBook</Title>

      <PhonebookContainer>
        <PhonebookForm />
      </PhonebookContainer>
      <TitleCont>Contacts</TitleCont>
      <Filter />
      <ContactList />
    </div>
  );
};
