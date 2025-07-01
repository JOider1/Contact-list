import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  TOGGLE_FAVORITE,
  SEARCH_CONTACT,
  DELETE_STATUS,
  ADD_STATUS,
  EDIT_STATUS,
  SET_FILTER,
} from "./type";

export const addContact = (newContact) => {
  return {
    type: ADD_CONTACT,
    payload: newContact,
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

export const editContact = (id, updatedContact) => {
  return {
    type: EDIT_CONTACT,
    payload: { id, updatedContact },
  };
};

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    payload: id,
  };
};

export const searchContact = (searchTerm) => {
  return {
    type: SEARCH_CONTACT,
    payload: searchTerm.toLowerCase(),
  };
};

export const deleteStatus = (status) => {
  return {
    type: DELETE_STATUS,
    payload: status,
  };
};

export const addStatus = (status, color) => {
  return {
    type: ADD_STATUS,
    payload: { status, color },
  };
};

export const editStatus = (oldStatus, newStatus, newBg) => {
  return {
    type: EDIT_STATUS,
    payload: { oldStatus, newStatus, newBg },
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};
