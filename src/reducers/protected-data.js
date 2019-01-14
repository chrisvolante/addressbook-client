import {
  FETCH_USER_CONTACTS_SUCCESS,
  FETCH_USER_CONTACTS_ERROR,
  CREATE_USER_CONTACT_SUCCESS,
  DELETE_USER_CONTACT_SUCCESS
} from "../actions/protected-data";

const initialState = {
  data: "",
  error: null,
  listOfContacts: [],
  isCreated: false,
  isDeleted: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_CONTACTS_SUCCESS:
      return {
        ...state,
        listOfContacts: action.data,
        isCreated: false,
        isDeleted: false,
        error: null
      };
    case FETCH_USER_CONTACTS_ERROR:
      return {
        ...state,
        error: action.error
      };
    case CREATE_USER_CONTACT_SUCCESS:
      return {
        ...state,
        isCreated: true
      };
    case DELETE_USER_CONTACT_SUCCESS:
      const idToRemove = action.data.id;
      const indexToRemove = searchPositionById(
        state.listOfContacts,
        idToRemove
      );
      const newListOfContacts = state.listOfContacts.splice(indexToRemove, 1);
      return {
        ...state,
        listOfContacts: newListOfContacts,
        isDeleted: true
      };
    default:
      return state;
  }
}

function searchPositionById(array, id) {
  return array
    .map((contact, index) => {
      return contact.id;
    })
    .indexOf(id);
}
