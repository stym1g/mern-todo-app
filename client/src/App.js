import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserDetails from "./UserDetails/UserDetails";
import CreateUser from "./CreateUser/CreateUser";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);

  const removePerson = (index,_id) => {
    axios.post("/api/users/deleteUser", _id).then((response) => {
      console.log(_id);
      if (response.data.success) {
        //console.log("Record deleted");
        const newPersons = [...persons];
        newPersons.splice(index, 1);
        setPersons(newPersons);
      } else {
        console.log("Failed to delete user ",response.data.err);
      }
    });
  };

  const addPerson = (person) => {
    axios.post("/api/users/saveUser", person).then((response) => {
      if (response.data.success) {
        const newPersons = [...persons, person];
        setPersons(newPersons);
      } else {
        console.log("Failed to save user ",response.data);
      }
    });
  };

  useEffect(() => {
    axios.post("/api/users/getUsers", {}).then((response) => {
      if (response.data.success) {
        //console.log("response.data: ",response.data.doc);
        setPersons(response.data.doc);
      } else {
        console.log("Failed to get users");
      }
    });
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Person Details</h1>
        <CreateUser addPerson={addPerson} />
        <div>
          {persons.map((person, index) => (
            <Card key={index}>
              <Card.Body>
                <UserDetails
                  index={index}
                  person={person}
                  removePerson={removePerson}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
