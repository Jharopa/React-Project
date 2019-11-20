import React from 'react';
import axios from 'axios';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Make: '',
      Model: '',
      Year: '',
      Image: '',
      _id: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuitarMakeChange = this.handleGuitarMakeChange.bind(this);
    this.handleGuitarModelChange = this.handleGuitarModelChange.bind(this);
    this.handleGuitarYearChange = this.handleGuitarYearChange.bind(this);
    this.handleGuitarImageChange = this.handleGuitarImageChange.bind(this);
  }
  componentDidMount() {
    alert(this.props.match.params.id);

    axios.get('http://localhost:4000/api/guitars/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          _id: response.data._id,
          Make: response.data.make,
          Model: response.data.model,
          Year: response.data.year,
          Image: response.data.image,
        })
      })
      .catch();


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

  handleSubmit(e) {
    alert(this.state.Make + "      " + this.state.Model
      + "       " + this.state.Year + "       " + this.state.Image);
    e.preventDefault();

    const newGuitar = {
      make: this.state.Make,
      model: this.state.Model,
      year: this.state.Year,
      image: this.state.Image
    };

    axios.put('http://localhost:4000/api/guitars/' + this.state._id,
      newGuitar)
      .then()
      .catch();

    this.setState({
      Make: '',
      Model: '',
      Year: '',
      Image: ''
    });
  }

  render() {
    return (
      <div>
        <h1>Hello from Edit component</h1>
        <form onSubmit={this.handleSubmit}>
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
          <div>
            <input
              type="submit"
              value="Edit Guitar">
            </input>
          </div>
        </form>
      </div>
    )
  }
}

export default Edit;