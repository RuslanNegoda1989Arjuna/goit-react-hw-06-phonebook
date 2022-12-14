import { ContactIt, Item, ListBox } from './ContactList.styled';
import { IconButton } from 'components/IconButton/IconButton';
import { MdDeleteOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMyContact, getContacts, getFilter } from '../../redux';

// import { deleteMyContact, getContacts } from 'redux/sliceContacts';
// import { getFilter } from 'redux/sliceFilter';

export const ContactList = () => {
  const dispatch = useDispatch();
  // Redux отримуєм з сховища дані
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // Ф-ція видалення
  const deleteContact = idContact => {
    dispatch(deleteMyContact(idContact));
  };

  // фільтруємо контакти, filter нормалізуємо,
  //  щоб на кажній ітерації не викликати ловерКейс

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = findContacts();

  return (
    <ListBox>
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <ContactIt>
                {name}: {number}
              </ContactIt>
              <IconButton
                type="button"
                onClick={() => deleteContact(id)}
                aria-label="Delete contact"
              >
                <MdDeleteOutline size="20px" />
              </IconButton>
            </Item>
          );
        })}
      </ul>
    </ListBox>
  );
};
