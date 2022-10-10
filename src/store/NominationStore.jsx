//Create a store and save the fetched movies
//into that store. Your store should reflect
//wither the request is done or is still loading.

// import { configureStore } from "@reduxjs/toolkit";
// import nominationReducer from "../features/user/movieslice";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  nominatedMovies: [],

  // user: {
  //   name: "Ali",
  //   email: "Email@email.com",
  //   isAdmin: true
  // }
};

export const ACTIONS = {
  ADD_MOVIE: "ADD_MOVIE",
  DELETE_MOVIE: "DELETE_MOVIE",
};

export const nominationStore = createContext({
  ...INITIAL_STATE,
});

const nominationReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_MOVIE:
      return {
        ...state,
        nominatedMovies: [...state.nominatedMovies, action.payload],
        // nominatedMovies: { ...state.nominatedMovies, hello: action.payload },
        // state.nominatedMovies.add(action.payload)
      };
    case ACTIONS.DELETE_MOVIE:
      // console.log(Array.from(new Set([...state.nominatedMovies])));
      return {
        ...state,
        nominatedMovies: [...state.nominatedMovies].filter(
          (e) => e !== action.payload
        ),
      };
    default: {
      return state;
    }
  }
};
// export const store = configureStore({
//   reducer: {
//     user: nominationReducer
//   }
// });

const NominationProvider = ({ children }) => {
  const [nomiStore, nomiDispatch] = useReducer(
    nominationReducer,
    INITIAL_STATE
  );

  return (
    <nominationStore.Provider
      value={{
        nomiStore,
        nomiDispatch,
      }}
    >
      {children}
    </nominationStore.Provider>
  );
};

export default NominationProvider;
