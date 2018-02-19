"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var ReactBootstrap = require("react-bootstrap");
var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;
var FormGroup = ReactBootstrap.FormGroup;
var FormControl = ReactBootstrap.FormControl;
var Button = ReactBootstrap.Button;
var Navigation = /** @class */ (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navigation.prototype.render = function () {
        var Items = this.props.comunnity.map(function (row, index) {
            return React.createElement(MenuItem, { key: index, eventKey: 3 + index / 10.0, href: row.href }, row.text);
        });
        var Login;
        if (this.props.user) {
            Login = (React.createElement(Nav, { pullRight: true },
                React.createElement(NavDropdown, { eventKey: 5, title: this.props.user, id: "dropdown-basic-info", bsStyle: "info" },
                    React.createElement(MenuItem, { eventKey: 5.1 }, "Cuenta"),
                    React.createElement(MenuItem, { eventKey: 5.1 }, "Cerrar Session"))));
        }
        else {
            Login = (React.createElement(Navbar.Form, { pullRight: true },
                React.createElement(FormGroup, null,
                    React.createElement(FormControl, { type: "text", placeholder: "Account" }),
                    React.createElement(FormControl, { type: "password", placeholder: "Password" })),
                " ",
                '',
                React.createElement(Button, { type: "submit", bsStyle: "primary" }, "Login")));
        }
        return (React.createElement(Navbar, null,
            React.createElement(Navbar.Header, null,
                React.createElement(Navbar.Brand, null,
                    React.createElement("a", { href: "/" }, "Netsphere"))),
            React.createElement(Nav, null,
                React.createElement(NavItem, { eventKey: 1, href: "/register" }, "Registrate"),
                React.createElement(NavItem, { eventKey: 2, href: "/download" }, "Descargar"),
                React.createElement(NavDropdown, { eventKey: 3, title: "Communidad", id: "basic-nav-dropdown" }, Items),
                React.createElement(NavItem, { eventKey: 4, href: "/shop" }, "NetsphereCoins")),
            Login));
    };
    return Navigation;
}(React.Component));
exports["default"] = Navigation;
