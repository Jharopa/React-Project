import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';

class Add extends React.Component {
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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuitarMakeChange = this.handleGuitarMakeChange.bind(this);
    this.handleGuitarModelChange = this.handleGuitarModelChange.bind(this);
    this.handleGuitarYearChange = this.handleGuitarYearChange.bind(this);
    this.handleGuitarImageChange = this.handleGuitarImageChange.bind(this);
    this.handleGuitarColorChange = this.handleGuitarColorChange.bind(this);
    this.handleGuitarMaterialChange = this.handleGuitarMaterialChange.bind(this);
    this.handleGuitarPickupsChange = this.handleGuitarPickupsChange.bind(this);
  }

  handleGuitarMakeChange(e) {
    this.setState({ Make: e.target.value });
  }

  handleGuitarModelChange(e) {
    this.setState({ Model: e.target.value });
  }

  handleGuitarYearChange(e) {
    this.setState({ Year: e.target.value });
  }

  handleGuitarImageChange(e) {
    this.setState({ Image: e.target.value });
  }

  handleGuitarColorChange(e) {
    this.setState({ Color: e.target.value });
  }

  handleGuitarMaterialChange(e) {
    this.setState({ Material: e.target.value });
  }

  handleGuitarPickupsChange(e) {
    this.setState({ Pickups: e.target.value });
  }

  handleSubmit(e) {
    alert(this.state.Make + "      " + this.state.Model
      + "       " + this.state.Year + "       " + this.state.Image);
    e.preventDefault();

    const newGuitar = {
      make: this.state.Make,
      model: this.state.Model,
      year: this.state.Year,
      image: this.state.Image,
      color: this.state.Color,
      material: this.state.Material,
      pickups: this.state.Pickups
    };
    axios.post('http://localhost:4000/api/guitars', newGuitar)
      .then()
      .catch();

    this.setState({
      Make: '',
      Model: '',
      Year: '',
      Image: '',
      Color: '',
      Material: '',
      Pickups: ''
    });
  }

  render() {
    return (
      <div>
        <h1 className="m-5">Add a Guitar</h1>
        <form onSubmit={this.handleSubmit} className="mx-auto" style={{ width: '50rem' }}>
          <div className='form-group'>
            <label>Guitar Brand</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Make}
              onChange={this.handleGuitarMakeChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Guitar Model</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Model}
              onChange={this.handleGuitarModelChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Guitar Year</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Year}
              onChange={this.handleGuitarYearChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Guitar Image URL</label>
            <textarea
              row='3'
              className='form-control'
              value={this.state.Image}
              onChange={this.handleGuitarImageChange}
            ></textarea>
          </div>
          <div className='form-group'>
            <label>Guitar Color</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Color}
              onChange={this.handleGuitarColorChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Guitar Material</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Material}
              onChange={this.handleGuitarMaterialChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Guitar Pickups</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Pickups}
              onChange={this.handleGuitarPickupsChange}
            ></input>
          </div>
          <div>
            <input
              type="submit"
              value="Add Guitar">
            </input>
          </div>
        </form>
      </div>
    );
  }
}

export default Add;