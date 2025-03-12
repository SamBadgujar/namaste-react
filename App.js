const parent = React.createElement(
    "div", { id: "parent" }, 
    React.createElement(
        "div", { id: "child" },
        React.createElement(
            "h1", { id: "heading" }, "Hello World From React!!!!!!"
        )
    )
);

console.log(parent); // Logs React element object

const rootElement = document.getElementById("root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(parent); // Render the correct element
} else {
    console.error("Root element not found!");
}
