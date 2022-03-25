import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

function CreateUser({ addPerson }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName) return;
    addPerson({ firstName, lastName, age });
    setFirstName("");
    setLastName("");
    setAge("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Person</b>
        </Form.Label>
        <Form.Control
          type="text"
          style={{ marginTop: "5px" }}
          value={firstName}
          className="input"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <Form.Control
          type="text"
          style={{ marginTop: "5px" }}
          value={lastName}
          className="input"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <Form.Control
          type="number"
          style={{ marginTop: "5px" }}
          value={age}
          className="input"
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
      </Form.Group>
      <Button
        variant="primary mb-3"
        style={{ marginTop: "10px" }}
        type="submit"
      >
        Add
      </Button>
    </Form>
  );
}

export default CreateUser;
