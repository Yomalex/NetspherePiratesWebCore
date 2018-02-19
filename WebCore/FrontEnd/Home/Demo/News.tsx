import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap'

const Panel = ReactBootstrap.Panel;
const ListGroup = ReactBootstrap.ListGroup;
const ListGroupItem = ReactBootstrap.ListGroupItem;

class News extends React.Component<any, any> {

    constructor() {
        super();
        this.state = {
            news: [],
            events:[]
        };
    }

    componentDidMount() {
        const dataset = fetch(this.props.data)
            .then(results => { return results.json(); });
        dataset.then(data => {
            let NewsList = data.news.map((row, index) =>
                <ListGroupItem key={index} header={row.title}>{row.text}</ListGroupItem>);
            let EventsList = data.events.map((row, index) =>
                <ListGroupItem key={index} header={row.title}>{row.text}</ListGroupItem>);
            this.setState({
                news: NewsList,
                events: EventsList
            });
        });
    }

    public render() {
        return (
            <div className="News">
                <Panel>
                    <Panel.Heading>Noticias</Panel.Heading>
                    <Panel.Body>
                        <ListGroup>
                            {this.state.news}
                        </ListGroup>
                    </Panel.Body>
                </Panel>
                <Panel>
                    <Panel.Heading>Eventos</Panel.Heading>
                    <Panel.Body>
                        <ListGroup>
                            {this.state.events}
                        </ListGroup>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default News;