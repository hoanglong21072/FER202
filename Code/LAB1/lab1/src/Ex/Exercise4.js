import React from "react";

function Exercise4() {
  const averageAge = (...ages) => {
    const total = ages.reduce((sum, age) => sum + age, 0);
    return (total / ages.length).toFixed(2);
  };

  const ages = [30, 40, 50, 60];

  return (
    <div>
      <h2>Exercise 4 – Average Age</h2>
      <p>Average Age: {averageAge(...ages)}</p>
    </div>
  );
}

export default Exercise4;
