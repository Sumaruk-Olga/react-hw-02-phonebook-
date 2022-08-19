import { Component } from 'react';
import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import { Container, SectionTitle } from './App.styled';
import { Contacts } from 'components/Contacts/Contacts';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { initialValues } from 'utiles/initialValues';
import { Filter } from 'components/Filter/Filter';




export class App extends Component {
  state = {
    contacts: [...initialValues],    
    filter:''
  };  

  handleSubmit = (obj) => {     
    this.setState(prevState => ({
      contacts: [...prevState.contacts, obj]
    }))
  }

  isNamePresent = (name) => {    
    const normalizedName = name.toLowerCase();    
    return this.state.contacts.find(item=>item.name.toLowerCase()===normalizedName);
  }

  handleDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));    
  }
   
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

   getVisibleContacts = () => {    
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(item =>item.name.toLowerCase().includes(normalizedFilter));
  };


  render() {
    
    return (<>
    <PageTitle>goit react hw 02 phonebook</PageTitle>
      <Container>
        <SectionTitle>Phonebook</SectionTitle>
        <ContactForm onSubmit={this.handleSubmit} isNamePresent={this.isNamePresent} />
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <SectionTitle>Contacts</SectionTitle>
        <Contacts contacts={this.getVisibleContacts()} onDelete={this.handleDeleteContact} />
      </Container>
      </>
    );
  }
}
