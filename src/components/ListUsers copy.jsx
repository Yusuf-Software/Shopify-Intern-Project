//Display the list of users
//in a Table in the `ListUsers.jsx` component.
//The Table column should be :
//Id, Name, Email, Phone, Action.

//In the `ListUsers.jsx` the Action
//column should have a Buttnon labled
// as Delete. Once the user Clicks the
//button the user should be deleted
//from the store
// https://jsonplaceholder.typicode.com/users

import React, { useContext, useEffect } from "react";
import { UserStore } from "../store/MovieStore";
import axios from "axios";

// import { useSelector, useDispatch } from "react-redux";
// import { fetchUsers } from "./userSlice";

//Might be good, but doesn't work
function ListUsers() {
  const { store, dispatch } = useContext(UserStore);

  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const fetchUsers = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        dispatch({ payload: response.data, type: "fetch_success" })
      );
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //   dispatch(fetchUsers());
  // }, [dispatch]);

  // console.log(state);

  return (
    <div>
      {/* {user.loading && <div>Loading...</div>} */}
      <ul>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {store.users.map((element) => (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.phone}</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ul>
    </div>
  );
}

export default ListUsers;
