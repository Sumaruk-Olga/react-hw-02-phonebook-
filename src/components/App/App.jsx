import { Component } from 'react';
import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import { Container, SectionTitle } from './App.styled';
import { Contacts } from 'components/Contacts/Contacts';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { initialValues } from 'utiles/initialValues';



export class App extends Component {
  state = {
    contacts: initialValues,    
    filter:''
  };

  

  handleSubmit = (obj) => {    
    console.log(obj);
    this.setState(prevState => {
      const newState = { ...prevState };
      newState.contacts.push(obj);
      return newState;
    }) 
   
  }
  handleDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));    
  }
   
  render() {
    
    return (<>
    <PageTitle>goit react hw 02 phonebook</PageTitle>
      <Container>
        <SectionTitle>Phonebook</SectionTitle>
        <ContactForm onSubmit={this.handleSubmit}/>
        <SectionTitle>Contacts</SectionTitle>
        <Contacts contacts={this.state.contacts} onDelete={this.handleDeleteContact} />         
        
      </Container>
      </>
    );
  }
}
