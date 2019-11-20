import React from 'react'
import Guitars from './guitars';
import axios from 'axios';
import CardDeck from 'react-bootstrap/CardDeck'


class Display extends React.Component {

    state = {
        guitars: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/guitars')
            .then((response) => {
                this.setState({ guitars: response.data.guitars })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1 className="mt-5 mb-3">The Guitars</h1>
                <CardDeck className="mx-auto my-5" style={{width: '66%'}}>
                    <Guitars myGuitars={this.state.guitars}></Guitars>
                </CardDeck>
            </div>
        );
    }
}
export default Display;