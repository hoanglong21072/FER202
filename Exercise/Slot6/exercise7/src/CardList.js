import React from "react";

const cards = [
  {
    image: "img/xe1.jpg",
    text: "Some text inside the first card",
    bgClass: "bg-primary",
    textColor: "text-white"
  },
  {
    image: "img/xe1.jpg",
    text: "Some text inside the first card",
    style: { backgroundColor: "#f4b942" },
    textColor: ""
  },
  {
    image: "img/xe1.jpg",
    text: "Some text inside the first card",
    bgClass: "bg-danger",
    textColor: "text-white"
  }
];

function CardList() {
  return React.createElement(
    "div",
    { className: "container mt-4" },
    [
      React.createElement("h4", { key: "heading" }, "Cards Columns"),
      React.createElement(
        "div",
        { className: "row", key: "row" },
        cards.map((card, index) =>
          React.createElement(
            "div",
            { className: "col-md-4", key: index },
            React.createElement(
              "div",
              {
                className: `card ${card.bgClass || ""} ${card.textColor || ""}`,
                style: card.style
              },
              [
                React.createElement("img", {
                  key: "img" + index,
                  className: "card-img-top",
                  src: card.image,
                  alt: "Card",
                  style: { border: "3px solid #000", borderRadius: "5px" } // <-- thêm viền ở đây
                }),
                React.createElement(
                  "div",
                  { className: "card-body", key: "body" + index },
                  React.createElement("p", { className: "card-text" }, card.text)
                )
              ]
            )
          )
        )
      )
    ]
  );
}

export default CardList;
