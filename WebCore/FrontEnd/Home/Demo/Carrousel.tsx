import * as React from 'react'
import * as ReactBootstrap from 'react-bootstrap'

const Carousel = ReactBootstrap.Carousel;

class CarouselX extends React.Component<any, any> {
    constructor() {
        super();
        this.state =
            {
                childs: []
            };
    }
    componentDidMount() {
        fetch(this.props.data)
            .then(resp => { return resp.json(); })
            .then(dat => {
                let DChilds = dat.map((row, index) => 
                    <Carousel.Item key={index}>
                        <img width={900} height={500} alt="900x500" src={row.src} />
                        <Carousel.Caption>
                            <h3>{row.title}</h3>
                            <p>{row.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
                this.setState({ childs: DChilds });
                console.log(dat.length);
            });
    }
    public render() {
        return (
            <Carousel>
                {this.state.childs}
            </Carousel>
        );
    }
}

export default CarouselX;