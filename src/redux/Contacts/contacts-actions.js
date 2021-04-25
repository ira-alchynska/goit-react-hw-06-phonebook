import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add');
const deleteContact = createAction('contacts/delete');
const filteredContact = createAction('contacts/filtered');

export { addContact, deleteContact, filteredContact };
