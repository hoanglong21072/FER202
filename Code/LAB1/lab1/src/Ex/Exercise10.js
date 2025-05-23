import React, { useState } from "react";

function Exercise10() {
  const employees = [
    { name: "Anna", department: "HR" },
    { name: "Brian", department: "IT" },
    { name: "Clara", department: "Finance" },
  ];

  const [search, setSearch] = useState("");

  const filtered = employees.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Exercise 10 – Search Employee by Name</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map((e, index) => (
          <li key={index}>
            {e.name} - {e.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise10;
