"use strict";
exports.__esModule = true;
var ReactDOM = require("react-dom");
var React = require("react");
var News_1 = require("./Demo/News");
var Carrousel_1 = require("./Demo/Carrousel");
var newsLayer = document.getElementById('react-homepage-root');
var carouselLayer = document.getElementById('react-carousel');
ReactDOM.render(React.createElement(News_1["default"], { data: newsLayer.getAttribute('news') }), newsLayer);
ReactDOM.render(React.createElement(Carrousel_1["default"], { data: carouselLayer.getAttribute('news') }), carouselLayer);
