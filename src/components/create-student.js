import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)
    // Setting up state
    this.state = { fullName: '', age: '', gender:'', email: '', rollno: ''}
  }

  onChangeStudentName = (e) => {
    this.setState({ fullName: e.target.value })
  }
  onChangeStudentAge = (e) => {
    this.setState({ age: e.target.value })
  }
  onChangeStudentGender = (e) => {
    this.setState({ gender: e.target.value })
  }
  onChangeStudentEmail = (e) => {
    this.setState({ email: e.target.value })
  }
  onChangeStudentRollno = (e) => {
    this.setState({ rollno: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const studentObject = {
      fullName: this.state.fullName,
      age: this.state.age,
      gender: this.state.gender,
      email: this.state.email,
      rollno: this.state.rollno
    };

    axios.post('http://localhost:4000/students/create-student', studentObject)
      .then(res => console.log(res.data));

    this.setState({
      fullName: '', age: '', gender:'', email: '', rollno: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" value={this.state.fullName} onChange={this.onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label>Age </Form.Label>
          <Form.Control type="text" value={this.state.age} onChange={this.onChangeStudentAge} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Gender </Form.Label>
          <select className ="form-control" value={this.state.gender} onChange={this.onChangeStudentGender} >
              <option>Select Gender</option>
              <option value = "Male">Male</option>
              <option value = "Female">Female</option>
              <option value = "Others">Others</option></select>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} />
        </Form.Group>

        <Button  size="lg" block="block" type="submit" className="btn btn-primary">Create Student</Button>
      </Form>
    </div>);
  }
}
