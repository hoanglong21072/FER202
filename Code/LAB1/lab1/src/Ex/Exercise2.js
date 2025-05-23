import React from "react";

function Exercise2() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
  ];

  return (
    <div>
      <h2>Exercise 2 – List of Employees</h2>
      <ul>
        {employees.map((e, index) => (
          <li key={e.id || index}>
            {e.name} - {e.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise2;
