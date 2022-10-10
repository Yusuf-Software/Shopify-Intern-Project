//Display the list of users
//in a Table in the `ListMovies.jsx` component.
//The Table column should be :
//Id, Name, Email, Phone, Action.

//In the `ListMovies.jsx` the Action
//column should have a Buttnon labled
// as Delete. Once the user Clicks the
//button the user should be deleted
//from the store
// https://jsonplaceholder.typicode.com/users

import React, { useContext, useEffect, useState } from "react";
import { movieStore } from "../store/MovieStore";
import { nominationStore } from "../store/NominationStore";
import NominatedMovie from "./NominatedMovie";
import axios from "axios";

// import { useSelector, useDispatch } from "react-redux";
// import { fetchMovies } from "./userSlice";

//Might be good, but doesn't work
function ListMovies() {
  const { store, dispatch } = useContext(movieStore);
  const { nomiStore, nomiDispatch } = useContext(nominationStore);

  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const fetchMovies = () => {
    return axios
      .get(`https://www.omdbapi.com/?s=${search}&apikey=43033444`)
      .then((response) =>
        dispatch({ payload: response.data.Search, type: "fetch_success" })
      )
      .catch((error) => {
        dispatch({ error: "error", type: "fetch_error" });
      });
  };
  const nominateMovie = (movie) => {
    nomiDispatch({ type: "ADD_MOVIE", payload: movie });
  };
  const addNomination = (e) => {
    nominateMovie(e);
  };
  //eshnaka :(
  const handleDisable = () => {
    if (nomiStore.nominatedMovies.find((e) => e.id == e.imdbID)) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    fetchMovies();
  }, [search]);

  //   dispatch(fetchMovies());
  // }, [dispatch]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          handleSearch(e);
        }}
      />
      {/* {user.loading && <div>Loading...</div>} */}
      <div className="hello">
        <div>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Poster</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {store.movies &&
                store.movies.map((element) => (
                  <tr key={element.imdbID}>
                    <td>{element.Title}</td>
                    <td>{element.Year}</td>
                    <td>
                      <img src={element.Poster} alt="" />
                    </td>
                    <td>
                      <button
                        disabled={
                          nomiStore.nominatedMovies.includes(element) ||
                          nomiStore.nominatedMovies.length == 5
                        }
                        onClick={() => {
                          addNomination(element);
                        }}
                        // disabled={handleDisable()}
                        // disabled={nomiStore.nominatedMovies.find(
                        //   (e) => (e.id == element.imdbID
                        // )}
                        // ={nomiStore.find((e) => (e.id = imdbID))}
                      >
                        Nominate
                      </button>
                    </td>
                  </tr>
                ))}
              {!store.movies && <h1>{store.error}</h1>}
            </tbody>
          </table>
        </div>
        <NominatedMovie />
      </div>
    </div>
  );
}

export default ListMovies;
