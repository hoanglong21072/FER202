import React from "react";

function Exercise9() {
  const employees = [
    { name: "Anna", age: 50 },
    { name: "Clara", age: 19 },
    { name: "Elisabeth", age: 16 },
  ];

  const isTeenager = employees.some((e) => e.age >= 10 && e.age <= 20);

  return (
    <div>
      <h2>Exercise 9 – Teenager Check</h2>
      <p>{isTeenager ? "Yes" : "No"}</p>
    </div>
  );
}

export default Exercise9;
