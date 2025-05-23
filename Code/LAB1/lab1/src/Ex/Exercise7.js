import React from "react";

function Exercise7() {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
    { name: "Ann", department: "Finance" },
  ];

  const sorted = [...employees].sort((a, b) => {
    const d = a.department.localeCompare(b.department);
    return d !== 0 ? d : a.name.localeCompare(b.name);
  });

  return (
    <div>
      <h2>Exercise 7 – Sorted Employees</h2>
      <ul>
        {sorted.map((e, index) => (
          <li key={index}>
            {e.name} - {e.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise7;
