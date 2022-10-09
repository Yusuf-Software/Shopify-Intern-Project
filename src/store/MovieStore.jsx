//Create a store and save the fetched movies
//into that store. Your store should reflect
//wither the request is done or is still loading.

// import { configureStore } from "@reduxjs/toolkit";
// import movieReducer from "../features/user/movieslice";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  loading: true,
  error: '',
  movies: []
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

export const movieStore = createContext({
  ...INITIAL_STATE
});

const movieReducer = (state, action) => {
  switch (action.type) {
    case "fetch_success":
      return {
        loading: false,
        movies: action.payload,
        error: ''
        // ...state,
        // movies: action.payload
      };
      case "fetch_error":
      return {
        loading: false,
        movies: [], 
        error: action.error
      };
    default: {
      return state;
    }
  }
};
// export const store = configureStore({
//   reducer: {
//     user: movieReducer
//   }
// });

const MovieProvider = ({ children }) => {
  const [store, dispatch] = useReducer(movieReducer, INITIAL_STATE);

  return (
    <movieStore.Provider
      value={{
        store,
        dispatch
      }}
    >
      {children}
    </movieStore.Provider>
  );
};

export default MovieProvider;
