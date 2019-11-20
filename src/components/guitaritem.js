import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


class GuitarItem extends React.Component{

  constructor(){
    super();
    this.DeleteGuitar = this.DeleteGuitar.bind(this);
  }

  DeleteGuitar(e){
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/guitars/"+this.props.guitar._id)
    .then()
    .catch();

  }

    render(){
        return(
            <div>
                {}


  <Card  border="primary" style={{ width: '28rem' }}>
  <Card.Header>{this.props.guitar.title}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <img src={this.props.guitar.poster}></img>
      <footer>
      {this.props.guitar.year}
      </footer>
    </blockquote>
  </Card.Body>
  <Button variant="danger" onClick={this.DeleteGuitar}>Delete</Button>
<Link to={"/edit/" + this.props.guitar._id} className="btn btn-primary">Edit</Link>
</Card>
            </div>
        )
    }
}
export default GuitarItem;