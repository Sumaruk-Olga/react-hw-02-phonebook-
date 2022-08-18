import { Component } from 'react';
import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import { Container, SectionTitle } from './App.styled';
import { Contacts } from 'components/Contacts/Contacts';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { initialValues } from 'utiles/initialValues';




export class App extends Component {
  state = {
    contacts: [...initialValues],    
    filter:''
  };  

  handleSubmit = (obj) => {    
    // console.log(obj);
    this.setState(prevState => {   
        const newState = { ...prevState };
        newState.contacts.push(obj);
        return newState;
    }) 
  }

  isNamePresent = (name) => {
    
    this.setState(prevState => {
      prevState.contacts.find(item => {
        if (item.name.toLowerCase() === name.toLowerCase()) {
          alert(`${name} is already in contacts`);
          return true;
        }
        return false;
      })
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
        <ContactForm onSubmit={this.handleSubmit} isNamePresent={this.isNamePresent} />
        <SectionTitle>Contacts</SectionTitle>
        <Contacts contacts={this.state.contacts} onDelete={this.handleDeleteContact} />         
        
      </Container>
      </>
    );
  }
}
