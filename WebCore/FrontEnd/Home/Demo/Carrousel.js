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
var Carousel = ReactBootstrap.Carousel;
var CarouselX = /** @class */ (function (_super) {
    __extends(CarouselX, _super);
    function CarouselX() {
        var _this = _super.call(this) || this;
        _this.state =
            {
                childs: []
            };
        return _this;
    }
    CarouselX.prototype.componentDidMount = function () {
        var _this = this;
        fetch(this.props.data)
            .then(function (resp) { return resp.json(); })
            .then(function (dat) {
            var DChilds = dat.map(function (row, index) {
                return React.createElement(Carousel.Item, { key: index },
                    React.createElement("img", { width: 900, height: 500, alt: "900x500", src: row.src }),
                    React.createElement(Carousel.Caption, null,
                        React.createElement("h3", null, row.title),
                        React.createElement("p", null, row.text)));
            });
            _this.setState({ childs: DChilds });
            console.log(dat.length);
        });
    };
    CarouselX.prototype.render = function () {
        return (React.createElement(Carousel, null, this.state.childs));
    };
    return CarouselX;
}(React.Component));
exports["default"] = CarouselX;
