import React from "react";

function StudentCard(props) {
  return (
    <div>
      <h3>Student Details</h3>
      <p>Name: {props.name}</p>
      <p>Department: {props.department}</p>
      <p>Marks: {props.marks}</p>
      <hr />
    </div>
  );
}

export default StudentCard;