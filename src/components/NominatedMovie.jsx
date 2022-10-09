//error is nothing
import React, { useContext, useEffect, useState } from "react";
import { nominationStore } from "../store/NominationStore";

const NominatedMovie = () => {
  const { nomiStore, nomiDispatch } = useContext(nominationStore);

  //   const addNomination = (id) => {
  //     const clickedMovie = store.movies.find((e) => e.imdbID === id);
  //     nominateMovie(clickedMovie);
  //   };

  return (
    <div>
      {/* {user.loading && <div>Loading...</div>} */}
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
          {nomiStore.nominatedMovies &&
            nomiStore.nominatedMovies.map((element) => (
              <tr key={element.imdbID}>
                <td>{element.Title}</td>
                <td>{element.Year}</td>
                <td>
                  <img src={element.Poster} alt="" />
                </td>
                <td>
                  <button>Delete</button>
                  {/* <button
                    onClick={() => {
                      addNomination(element.imdbID);
                    }}
                    // disabled={handleDisable()}
                    // disabled={nomiStore.nominatedMovies.find(
                    //   (e) => (e.id == element.imdbID
                    // )}
                    // ={nomiStore.find((e) => (e.id = imdbID))}
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          {!nomiStore.nominatedMovies && <h1>{nomiStore.nominatedMovies}</h1>}
        </tbody>
      </table>
    </div>
  );
};

export default NominatedMovie;
