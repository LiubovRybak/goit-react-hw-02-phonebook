import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactList } from './ContactsList/ContactsList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    // number: '',
  };

  addContact = data => {
    const contactInList = this.state.contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (contactInList) {
      alert(`Contact ${data.name} already in list!`);
      return;
    }

    const newContact = {
      ...data,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(newContact => newContact.id !== id),
    }));
  };

  onInputFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(newContact =>
      newContact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  render() {
    const onInputFilter = this.onInputFilter();
    return (
      <div>
        <h1>Phonebook</h1>
        <Form handleSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactFilter
          filter={this.state.filter}
          handleChange={this.handleChange}
        />
        <ContactList data={onInputFilter} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
