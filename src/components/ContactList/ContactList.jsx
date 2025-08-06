import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contacts/contactsReducer';
import { getContacts, getFilter } from '../redux/contacts/contactsReducer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <Typography variant="h6" component="h2" gutterBottom>
        Contacts
      </Typography>
      {filteredContacts.length > 0 ? (
        <List>
          {filteredContacts.map(({ id, name, number }) => (
            <ListItem 
              key={id}
              secondaryAction={
                <IconButton 
                  edge="end" 
                  aria-label="delete"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={name} secondary={number} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">No contacts found</Typography>
      )}
    </div>
  );
};