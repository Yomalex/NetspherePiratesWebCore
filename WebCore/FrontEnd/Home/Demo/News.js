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
var Panel = ReactBootstrap.Panel;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var News = /** @class */ (function (_super) {
    __extends(News, _super);
    function News() {
        var _this = _super.call(this) || this;
        _this.state = {
            news: [],
            events: []
        };
        return _this;
    }
    News.prototype.componentDidMount = function () {
        var _this = this;
        var dataset = fetch(this.props.data)
            .then(function (results) { return results.json(); });
        dataset.then(function (data) {
            var NewsList = data.news.map(function (row, index) {
                return React.createElement(ListGroupItem, { key: index, header: row.title }, row.text);
            });
            var EventsList = data.events.map(function (row, index) {
                return React.createElement(ListGroupItem, { key: index, header: row.title }, row.text);
            });
            _this.setState({
                news: NewsList,
                events: EventsList
            });
        });
    };
    News.prototype.render = function () {
        return (React.createElement("div", { className: "News" },
            React.createElement(Panel, null,
                React.createElement(Panel.Heading, null, "Noticias"),
                React.createElement(Panel.Body, null,
                    React.createElement(ListGroup, null, this.state.news))),
            React.createElement(Panel, null,
                React.createElement(Panel.Heading, null, "Eventos"),
                React.createElement(Panel.Body, null,
                    React.createElement(ListGroup, null, this.state.events)))));
    };
    return News;
}(React.Component));
exports["default"] = News;
