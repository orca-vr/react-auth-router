import { useDispatch } from 'react-redux';
// import { BtnDelete, BtnEdit, List, ListItem, Name, Phone, Wrapper } from './ContactList.styled';
import { Title, Wrapper } from './ContactList.styled';
// import { selectFilteredContacts } from '../../reduxstore/selectors';
// import { deleteContact, fetchToday } from '../../reduxstore/operations';
import { useEffect } from 'react';
import { fetchToday } from '../../reduxstore/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchToday());
  }, [dispatch]);
  
  return (
    <Wrapper>
      <Title>Today</Title>
      {/* <List>
        {contacts.map(el => (
          <ListItem key={el.id}>
            <Name>{el.name}</Name>
            <Phone>{el.number}</Phone>
            <BtnEdit>Edit            </BtnEdit>
            <BtnDelete onClick={() => dispatch(deleteContact(el.id))}>Del            </BtnDelete>
          </ListItem>
        ))}
      </List> */}
    </Wrapper>
  );
};
