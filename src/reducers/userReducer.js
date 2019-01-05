const initialState = {
  data: {},
  token: "",
  done: false,
  isLoggedIn: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        done: true,
        data: action.user
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        isLoggedIn: false,
        token: action.token
      };
    case "LOGOUT_USER_SUCCESS":
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default user;
