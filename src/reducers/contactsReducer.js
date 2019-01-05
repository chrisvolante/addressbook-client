const initialState = {
  data: {},
  contact: "",
  contacts: []
};

const contact = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_CONTACT_SUCCESS":
      return {
        ...state,
        data: action.contact
      };
    case "FETCH_USER_CONTACTS_SUCCESS":
      return {
        ...state,
        contacts: action.contacts
      };
    default:
      return state;
  }
};

export default contact;
