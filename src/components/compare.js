import React from 'react';
import GuitarItem from './guitaritem';

class Compare extends React.Component {

    render() {
        return this.props.myGuitars.map((guitar) => {
            return <GuitarItem key={guitar._id} guitar={guitar}></GuitarItem>
        });
    }
}
export default Compare;