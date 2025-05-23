import React from "react";

function Exercise5() {
  const employees = [
    { name: "Anna" },
    { name: "Brian" },
    { name: "Clara" },
    { name: "Ann" },
    { name: "Elisabeth" },
  ];

  return (
    <div>
      <h2>Exercise 5 – Dropdown</h2>
      <select>
        {employees.map((e, index) => (
          <option key={index}>{e.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Exercise5;
