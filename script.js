const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {key : "heading1"}, "This is Heading 1"),
    React.createElement("h1", {key : "heading2"}, "This is Heading 2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
