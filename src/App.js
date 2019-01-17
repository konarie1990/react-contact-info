import React, { Component } from "react";
import "./App.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  UncontrolledAlert,
  UncontrolledTooltip
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div className="App">
        <header classNameName="App-header">
          <div className="jumbotron" className="p-3 mb-2 bg-dark text-white">
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">
              This is a generic web form built using Bootstrap classes.
            </p>
            <hr className="my-2" />
            <p>
              It's easy to make responsive web pages using React and Bootstrap!
            </p>
          </div>
        </header>
        <form className="form-inline">
          <label className="sr-only" for="inlineFormInputName2">
            Name
          </label>
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="Jane Doe"
          />

          <label className="sr-only" for="inlineFormInputGroupUsername2">
            Username
          </label>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroupUsername2"
              placeholder="Username"
            />
          </div>
        </form>

        <form>
          <div className="form-group">
            <label for="formGroupExampleInput">Why do you want to apply?</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Reason for application"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">
              Please tell us why you would make a good fit for the role?
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Tell us about yourself"
            />
          </div>
        </form>

        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio1"
            name="customRadio"
            className="custom-control-input"
          />
          <label className="custom-control-label" for="customRadio1">
            I like this form
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio2"
            name="customRadio"
            className="custom-control-input"
          />
          <label className="custom-control-label" for="customRadio2">
            I love this form!
          </label>
        </div>

        <div className="form-check mb-2 mr-sm-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineFormCheck"
          />
          <label className="form-check-label" for="inlineFormCheck">
            Remember me
          </label>
        </div>

        <form className="form-inline">
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </form>

        <div>
          <Button onClick={this.toggle}>
            {"Modal Popup"}
            {this.props.buttonLabel}
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Modal</ModalHeader>
            <ModalBody>
              This is a modal popup that can be useful to help the user focus on
              a spefic element.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Do Something
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <div className="spacer" />
        <UncontrolledAlert color="danger">
          This is an alert and can be dismissed!
        </UncontrolledAlert>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Table</td>
              <td>Guy</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Lovestables</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>Database</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>

        <div>
          <p>
            What is this page? To find out, hover over the{" "}
            <span
              style={{ textDecoration: "underline", color: "blue" }}
              href="#"
              id="UncontrolledTooltipExample"
            >
              tooltip
            </span>
            .
          </p>
          <UncontrolledTooltip
            placement="right"
            target="UncontrolledTooltipExample"
          >
            Look! I'm using Reactstrap!!!
          </UncontrolledTooltip>
        </div>
      </div>
    );
  }
}

export default App;
