import * as ReactDOM from 'react-dom';
import * as React from 'react';

import News from './Demo/News';
import CarouselX from './Demo/Carrousel';

var newsLayer = document.getElementById('react-homepage-root');
var carouselLayer = document.getElementById('react-carousel');

ReactDOM.render(
    <News data={newsLayer.getAttribute('news')} />,
    newsLayer
);

ReactDOM.render(
    <CarouselX data={carouselLayer.getAttribute('news')} />,
    carouselLayer
);