import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import css from './module.css';
import Form from './Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form handleSubmit={this.addContact} />
        <h2>Contacts</h2>
      </div>
    );
  }
}
