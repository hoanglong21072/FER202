import React from "react";

function Exercise3() {
  const employees = [
    { id: 1, name: "Anna", department: "HR" },
    { id: 2, name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
  ];

  return (
    <div>
      <h2>Exercise 3 – Employee Table</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e, index) => (
            <tr key={e.id || index}>
              <td>{e.id || index + 1}</td>
              <td>{e.name}</td>
              <td>{e.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Exercise3;
