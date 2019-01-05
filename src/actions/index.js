export const REGISTER_USER_SUCCESS = user => ({
  type: "REGISTER_USER_SUCCESS",
  user
});

export const LOGIN_USER_SUCCESS = token => ({
  type: "LOGIN_USER_SUCCESS",
  token
});

export const LOGOUT_USER_SUCCESS = token => ({
  type: "LOGOUT_USER_SUCCESS",
  token
});

export const CREATE_CONTACT_SUCCESS = contact => ({
  type: "CREATE_CONTACT_SUCCESS",
  contact
});

export const FETCH_USER_CONTACTS_SUCCESS = contacts => ({
  type: "FETCH_USER_CONTACTS_SUCCESS",
  contacts
});

export const createContact = (name, email, phone, address, description) => {
  return dispatch => {
    fetch("http://localhost:8080/contacts", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone, address, description })
    })
      .then(response => response.json())
      .then(json => dispatch(CREATE_CONTACT_SUCCESS(json)))
      .catch(error => console.log(error));
  };
};

export const registerUser = (email, username, password) => {
  return dispatch => {
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, username, password })
    })
      .then(response => response.json())
      .then(json => dispatch(REGISTER_USER_SUCCESS(json)))
      .catch(error => console.log(error));
  };
};

export const loginUser = (username, password) => {
  return dispatch => {
    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(json => {
        const { jwtToken } = json;
        localStorage.setItem("token", jwtToken);
        dispatch(LOGIN_USER_SUCCESS(jwtToken));
      })
      .catch(error => console.log(error));
  };
};

export const fetchUserContacts = () => {
  return dispatch => {
    fetch("http://localhost:8080/contacts", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch(FETCH_USER_CONTACTS_SUCCESS(json));
      })
      .catch(error => console.log(error));
  };
};
