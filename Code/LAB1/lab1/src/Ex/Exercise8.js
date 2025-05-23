import React from "react";

function Exercise8() {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
    { name: "Ann", department: "Finance" },
    { name: "Elisabeth", department: "HR" },
  ];

  const grouped = employees.reduce((acc, emp) => {
    const dept = emp.department;
    if (!acc[dept]) acc[dept] = [];
    acc[dept].push(emp);
    return acc;
  }, {});

  return (
    <div>
      <h2>Exercise 8 – Grouped by Department</h2>
      {Object.entries(grouped).map(([dept, emps]) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {emps.map((e, index) => (
              <li key={index}>{e.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Exercise8;
