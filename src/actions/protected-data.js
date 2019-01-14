import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const FETCH_USER_CONTACTS_SUCCESS = "FETCH_USER_CONTACTS_SUCCESS";
export const fetchUserContactsSuccess = data => ({
  type: FETCH_USER_CONTACTS_SUCCESS,
  data
});

export const FETCH_USER_CONTACTS_ERROR = "FETCH_USER_CONTACTS_ERROR";
export const fetchUserContactsError = error => ({
  type: FETCH_USER_CONTACTS_ERROR,
  error
});

export const CREATE_USER_CONTACT_SUCCESS = "CREATE_USER_CONTACT_SUCCESS";
export const createUserContactSuccess = contact => ({
  type: CREATE_USER_CONTACT_SUCCESS,
  contact
});

export const UPDATE_USER_CONTACT_SUCCESS = "UPDATE_USER_CONTACT_SUCCESS";
export const updateUserContactSuccuess = data => ({
  type: UPDATE_USER_CONTACT_SUCCESS,
  data
});

export const DELETE_USER_CONTACT_SUCCESS = "DELETE_USER_CONTACT_SUCCESS";
export const deleteUserContactSuccess = data => ({
  type: DELETE_USER_CONTACT_SUCCESS,
  data
});

export const fetchUserContacts = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/contacts`, {
    method: "GET",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(response => normalizeResponseErrors(response))
    .then(response => response.json())
    .then(data => dispatch(fetchUserContactsSuccess(data)))
    .catch(err => {
      dispatch(fetchUserContactsError(err));
    });
};

export const createUserContact = (name, email, phone, address, description) => (
  dispatch,
  getState
) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, phone, address, description })
  })
    .then(response => response.json())
    .then(data => dispatch(createUserContactSuccess(data)))
    .catch(error => console.log(error));
};

export const updateUserContact = (
  id,
  name,
  email,
  phone,
  address,
  description
) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/contacts/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ name, email, phone, address, description })
  });
};

export const deleteUserContact = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return (
    fetch(`${API_BASE_URL}/contacts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
      // .then(response => normalizeResponseErrors(response))
      .then(response => response.json())
      .then(myJson => dispatch(fetchUserContacts()))
      .then(data => dispatch(deleteUserContactSuccess(data)))
  );
  // .catch(err => {
  //   dispatch(fetchUserContactsError(err));
  // });
};
