import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CreateProj = () => {
  const [projectDetails, setProjectDetails] = useState({
    name: "",
    description: "",
    difficultyRating: "",
    enjoymentRating: "",
    images: "",
    relatedProjects: "",
    links: "",
    summaryOfWork: "",
    tags: "",
    languagesUsed: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Project Details:", projectDetails);
  };
  const FormStyling = {
    Row: {
      padding: 10,
    },
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        padding: 20,
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Row style={FormStyling.Row}>
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Project Name"
                name="name"
                value={projectDetails.name}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formCategory">
              <Form.Label>Tags</Form.Label>
              
            </Form.Group>
          </Col>
        </Row>
        <Row style={FormStyling.Row}>
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Summary</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Project Summary"
                name="summaryOfWork"
                value={projectDetails.summaryOfWork}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter project description"
                name="description"
                value={projectDetails.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row style={FormStyling.Row}>
          <Col>
            <Form.Group controlId="formDifficultyRating">
              <Form.Label>Difficulty Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter difficulty rating"
                name="difficultyRating"
                value={projectDetails.difficultyRating}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formEnjoymentRating">
              <Form.Label>Enjoyment Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter enjoyment rating"
                name="enjoymentRating"
                value={projectDetails.enjoymentRating}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row style={FormStyling.Row}>
          <Button variant="success" type="submit" disabled>
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default CreateProj;
