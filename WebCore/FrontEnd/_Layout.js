"use strict";
exports.__esModule = true;
var ReactDOM = require("react-dom");
var React = require("react");
var Navigation_1 = require("./Navigation");
var Community = [
    { text: "Guias", href: "#" },
    { text: "Foros", href: "#" },
    { text: "Videos", href: "#" },
    { text: "ScreenShoots", href: "#" },
];
ReactDOM.render(React.createElement(Navigation_1["default"], { user: "", comunnity: Community }), document.getElementById('react-navbar'));
