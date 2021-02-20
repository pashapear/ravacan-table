import types from './types';

export const addRow = row => ({
  type: types.ADD_ROW,
  payload: row
});

export const editRow = payload => ({
  type: types.EDIT_ROW,
  payload
});

export const setQuery = query => ({
  type: types.SET_QUERY,
  payload: query
});

export default {
  addRow,
  editRow,
  setQuery
};
