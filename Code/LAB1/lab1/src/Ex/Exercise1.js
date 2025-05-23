import React from "react";

function Exercise1() {
  const employee = { name: "John Doe", age: 30, department: "IT" };
  const { name, age, department } = employee;

  return (
    <div>
      <h2>Exercise 1 – Destructuring</h2>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </div>
  );
}

export default Exercise1;
