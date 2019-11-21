import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'

class Detail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Make: '',
            Model: '',
            Year: '',
            Image: '',
            Color: '',
            Material: '',
            Pickups: ''
        };
    }

    componentDidMount() {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/guitars/' + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    _id: response.data._id,
                    Make: response.data.make,
                    Model: response.data.model,
                    Year: response.data.year,
                    Image: response.data.image,
                    Color: response.data.color,
                    Material: response.data.material,
                    Pickups: response.data.pickups,
                })
            })
            .catch();
    }

    render() {
        return (
            <div>
                <h1 className="m-5">Guitar Details</h1>
                <div className='m-auto'>
                    <CardDeck className="mx-auto my-5" style={{ width: '25rem' }}>
                        <Card className="m-5" border="dark" style={{ width: '20rem', height: '32rem' }}>
                            <Card.Header>{this.state.Make} {this.state.Model}</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <img src={this.state.Image} style={{ width: 'auto', height: 'auto' }}></img>
                                    <footer clasName="m-auto">
                                        {this.state.Year}
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
                <Table striped bordered hover size="sm" className='m-auto' style={{ width: '66%' }}>
                    <tbody>
                        <tr>
                            <th>Color</th>
                            <td>{this.state.Color}</td>
                        </tr>
                        <tr>
                            <th>Material</th>
                            <td>{this.state.Material}</td>
                        </tr>
                        <tr>
                            <th>Pickups</th>
                            <td>{this.state.Pickups}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Detail;