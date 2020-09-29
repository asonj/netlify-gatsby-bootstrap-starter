import React, { useState } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import axios from "axios";

const Form_ExpertProgram = ({ title, subTitle }) => {
  const [validated, setValidated] = useState(false);
  const [loading, toggleLoading] = useState(false);
  const [submitted, toggleSubmitted] = useState(false);
  const [formData, updateFormData] = React.useState({
    "8235d32a16": false,
    f95a329cbe: false,
    "60549e270e": false,
    bc233e9027: false,
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleCheckBoxChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: !formData[e.target.name],
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    toggleLoading(true);
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      toggleLoading(false);
    } else {
      axios
        .post(`${process.env.SERVER_URL}/contact`, {
          values: formData,
        })
        .then((res) => {
          toggleSubmitted(true);
          toggleLoading(false);
        });
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="form">
      <h4>{title}</h4>
      <Form.Group controlId="validationFirstName">
        <Form.Label>First name</Form.Label>
        <Form.Control required type="text" placeholder="First name" name="FNAME" onChange={handleChange} />
        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
      </Form.Group>
      <Form.Group controlId="validationLastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control required type="text" placeholder="Last name" name="LNAME" onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="validationEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" name="EMAIL" onChange={handleChange} />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group controlId="validationCompany">
        <Form.Label>Organization</Form.Label>
        <Form.Control type="text" placeholder="Organization" name="COMPANY" onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="validationState">
        <Form.Label>State</Form.Label>
        <Form.Control as="select" placeholder="State" name="STATE" required onChange={handleChange}>
          <option value="" disabled selected>
            Select a state
          </option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="validationMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="3" required name="MESSAGE" onChange={handleChange} />
      </Form.Group>
      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
        <input type="text" name="bInput" tabindex="-1" onChange={handleChange} />
      </div>

      <Form.Group>
        <Form.Label>{subTitle}</Form.Label>
        {/* newsletter */}
        <Form.Check
          type="checkbox"
          name="8235d32a16"
          value={formData["8235d32a16"]}
          label={"Signup for our monthly newsletter"}
          onChange={handleCheckBoxChange}
        />
      </Form.Group>
      {!submitted ? (
        <Button type="submit">
          {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Submit"}
        </Button>
      ) : (
        <Alert variant="success">Submission successful. We will be in touch with you soon.</Alert>
      )}
    </Form>
  );
};

export default Form_ExpertProgram;
