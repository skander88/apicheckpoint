import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="h11">User List</h1>
      <ListGroup>
        {listOfUsers.map((user) => (
          <ListGroup.Item key={user.id}>{user.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserList;
