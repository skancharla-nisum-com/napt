import React from "react";
import { ProgressBar, ButtonToolbar } from "react-bootstrap";
import "./Dashboard.scss";
import Execution from "../execution/Execution";
import ModalPopup from "../common/modal/Modal";
import Alert from "react-s-alert";

import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/genie.css";
const ref = React.createRef();

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {},
      modalShow: false,
      modalType: "",
    };
  }

  render() {
    return (
      <div>
        <h3 className="top-heading">Execution Engine Page</h3>
        <div className="container-fluid mt-4">
          <div className="row Project-info">
            <div className="col-6 row">
              <div className="col-5  projectclassName">
                <label>Load Preset:</label>
              </div>
              <div className="col-7">
                <select name="testCaseType" className="form-control">
                  <option>Config Preset</option>
                </select>
              </div>
            </div>
            <div className="col-6 row">
              <div className="col-5">
                <label>Preset Name:</label>
              </div>
              <div className="col-4">
                <input type="text" className="form-control"></input>
              </div>
              <div className="col-3">
                <button type="button" className="btn submit-button w-50 mr-5">
                  Save
                </button>
              </div>
            </div>
          </div>

          <div className="row Project-info">
            <div className="col-6 row">
              <div className="col-5  projectclassName">
                <label>Repo URL:</label>
              </div>
              <div className="col-7">
                <input type="text" className="form-control"></input>
              </div>
            </div>
          </div>

          <div className="row Project-info">
            <div className="col-6 row">
              <div className="col-5  projectclassName">
                <label>Schedule:</label>
              </div>
              <div className="col-7">
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="col-6 row">
              <div className="col-6  projectclassName">
                <button type="button" className="btn submit-button w-50 mr-5">
                  Create CRON
                </button>
              </div>
              <div className="col-6">
                <button type="button" className="btn submit-button w-50 mr-5">
                  Delete Past Jobs
                </button>
              </div>
            </div>
          </div>

          <div className="row Project-info">
            <div className="col-6 row">
              <div className="col-5  projectclassName">
                <label>Branch:</label>
              </div>
              <div className="col-7">
                <select name="testCaseType" className="form-control">
                  <option>Select Branch</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row Project-info">
            <div className="col-6 row">
              <div className="col-5  projectclassName">
                <label>Test Suite:</label>
              </div>
              <div className="col-7">
                <select name="testCaseType" className="form-control">
                  <option>Select Test Suite</option>
                </select>
              </div>
            </div>
            <div className="col-6 row">
              <div className="col-4  projectclassName">
                <button
                  type="button"
                  className="btn submit-button w-50 mr-5"
                  onClick={(event) => this.openModal(event, "createTestSuite")}
                >
                  Create
                </button>
              </div>
              <div className="col-4">
                <button type="button" className="btn submit-button w-50 mr-5">
                  Edit
                </button>
              </div>
              <div className="col-4">
                <button type="button" className="btn submit-button w-50 mr-5">
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div className="row Project-info">
            <div className="col-6 row">
              <div className="col-5  projectclassName">
                <label>Exec Preset:</label>
              </div>
              <div className="col-7">
                <select name="testCaseType" className="form-control">
                  <option>Execution Preset</option>
                </select>
              </div>
            </div>
            <div className="col-6 row">
              <div className="col-4  projectclassName">
                <button
                  type="button"
                  className="btn submit-button w-50 mr-5"
                  onClick={(event) => this.openModal(event, "createExecPreset")}
                >
                  Create
                </button>
              </div>
              <div className="col-4">
                <button type="button" className="btn submit-button w-50 mr-5">
                  Edit
                </button>
              </div>
              <div className="col-4">
                <button type="button" className="btn submit-button w-50 mr-5">
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div className="row Project-info">
            <div className="col-6 row">
              <div className="col-5  projectclassName">
                <label>Notification:</label>
              </div>
              <div className="col-7">
                <select name="testCaseType" className="form-control">
                  <option>Notification Preset</option>
                </select>
              </div>
            </div>
            <div className="col-6 row">
              <div className="col-4  projectclassName">
                <button
                  type="button"
                  className="btn submit-button w-50 mr-5"
                  onClick={(event) => this.openModal(event, "createNotiPreset")}
                >
                  Create
                </button>
              </div>
              <div className="col-4">
                <button type="button" className="btn submit-button w-50 mr-5">
                  Edit
                </button>
              </div>
              <div className="col-4">
                <button type="button" className="btn submit-button w-50 mr-5">
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div className="row Project-info">
            <div className="col-6 row">
              <div className="col-5  projectclassName">
                <label>Parallel Build# :</label>
              </div>
              <div className="col-7">
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="col-6 row">
              <div className="col-4  projectclassName">
                <button type="button" className="btn submit-button w-50 mr-5">
                  Build
                </button>
              </div>
              {/* <div className="col-8">
                <ProgressBar now={60} variant="info" />
              </div> */}
            </div>
          </div>

          <ButtonToolbar>
            <ModalPopup
              show={this.state.modalShow}
              onHide={this.setModalShow}
              params={this.state.params}
              modalType={this.state.modalType}
            />
          </ButtonToolbar>
        </div>
        <h4 className="top-heading">Last Build Details</h4>
        <Execution
          ref={ref}
          jobName={this.state.jobName}
          threadCount={this.state.threadCount}
        />
      </div>
    );
  }
  setModalShow = () => {
    this.setState({
      modalShow: !this.state.modalShow,
    });
  };

  openModal = (event, type) => {
    this.setState({
      modalShow: true,
      modalType: type,
    });
  };

  showAlert = (msg) => {
    Alert.info(msg, {
      position: "top-right",
      effect: "genie",
    });
  };
}
export default Dashboard;
