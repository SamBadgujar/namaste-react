import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18+
import "./index.css";
const parent = React.createElement(
    "div", { id: "parent" }, 
    React.createElement(
        "div", { id: "child" },
        React.createElement(
            "h1", { id: "heading" }, "Hello World From React!!!!!!"
        )
    )
);

const rootElement = document.getElementById("root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(parent);
} else {
    console.error("Root element not found!");
}
