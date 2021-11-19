import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  deleteContactSuccess,
  fetchSuccess,
  changeFilter,
} from './actions';

const items = createReducer([], {
  [fetchSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) =>
    state.find(({ name }) => name === payload.name)
      ? alert(`${payload.name} вже існує в телефонній книзі.`)
      : [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({ items, filter });

export default contactsReducer;
