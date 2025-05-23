import React from "react";

function Exercise6() {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
  ];

  const itEmployees = employees.filter((e) => e.department === "IT");

  return (
    <div>
      <h2>Exercise 6 – IT Department</h2>
      <ul>
        {itEmployees.map((e, index) => (
          <li key={index}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise6;
