import * as ReactDOM from 'react-dom'
import * as React from 'react'

import Navigation from './Navigation';

var Community = [
    { text: "Guias", href: "#" },
    { text: "Foros", href: "#" },
    { text: "Videos", href: "#" },
    { text: "ScreenShoots", href: "#" },
];

ReactDOM.render(<Navigation user="" comunnity={Community} />,
    document.getElementById('react-navbar')
);