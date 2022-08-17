import { Component } from 'react';
import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import { Container, SectionTitle } from './App.styled';
import { Contacts } from 'components/Contacts/Contacts';
import { nanoid } from 'nanoid';



export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter:''
  };

  handleChange = (e) => {   
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.name.value);
    // console.log(e.target.elements.number.value);
    this.setState(prevState => {
      // console.log(prevState.contacts);      
      prevState.contacts.push({
        id: nanoid(),
        name: e.target.elements.name.value,
        number: e.target.elements.number.value
      });
    });
  }
  handleDeleteContact = (id) => {
    console.log('id', id);
  }
   
  render() {
    
    return (<>
    <PageTitle>goit react hw 02 phonebook</PageTitle>
      <Container>
        <SectionTitle>Phonebook</SectionTitle>
        <form onSubmit={this.handleSubmit}>
          <label>Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <input
  type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
          <button type='submit'>add contact</button>
        </form>
        <SectionTitle>Contacts</SectionTitle>
        <Contacts contacts={this.state.contacts} onDelete={this.handleDeleteContact} />         
        
      </Container>
      </>
    );
  }
}
