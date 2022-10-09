//Create a store and save the fetched users
//into that store. Your store should reflect
//wither the request is done or is still loading.

// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../features/user/userSlice";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  users: []
  // user: {
  //   name: "Ali",
  //   email: "Email@email.com",
  //   isAdmin: true
  // }
};

export const ACTION = {
  ADD_VALUE: "ADD_VALUE",
  DELETE_VALUE: "DELETE_VALUE"
};

export const UserStore = createContext({
  ...INITIAL_STATE
});

const userReducer = (state, action) => {
  switch (action.type) {
    case "fetch_success":
      return {
        ...state,
        users: action.payload
      };
    default: {
      return state;
    }
  }
};
// export const store = configureStore({
//   reducer: {
//     user: userReducer
//   }
// });

const UserProvider = ({ children }) => {
  const [store, dispatch] = useReducer(userReducer, INITIAL_STATE);

  return (
    <UserStore.Provider
      value={{
        store,
        dispatch
      }}
    >
      {children}
    </UserStore.Provider>
  );
};

export default UserProvider;
