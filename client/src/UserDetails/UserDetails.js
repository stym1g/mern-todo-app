import React from "react";
import { Button} from 'react-bootstrap';

function UserDetails({ index, person, removePerson }) {
  return (
    <div className="person">
      <span>
        Name: {person.firstName} {person.lastName}
      </span>
      <span>Age: {person.age} </span>
      <div>
        <Button variant="outline-danger" onClick={() => removePerson(index,person._id)}>
          ✕
        </Button>
      </div>
    </div>
  );
}

export default UserDetails;
