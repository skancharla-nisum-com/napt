import React from "react";
import { Table } from "react-bootstrap";

import ModalPopup from "../common/modal/Modal";
import "./Detail.scss";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {},
      modalShow: false,
      modalType: "",
    };
  }
  render() {
    const headings = [
      "Scenario",
      "Pass Count",
      "Fail Count",
      "Total",
      "Pass % ",
      "Fail % ",
    ];
    const details = [
      {
        scenario: "Verify Login with valid credentials",
        pass_count: "25",
        fail_count: "20",
        total: "45",
        pass_perct: "55",
        fail_perct: "45",
      },
      {
        scenario: "Verify Login with invalid credentials",
        pass_count: "25",
        fail_count: "20",
        total: "45",
        pass_perct: "55",
        fail_perct: "45",
      },
      {
        scenario: "Verify Login with blank user and password",
        pass_count: "25",
        fail_count: "20",
        total: "45",
        pass_perct: "55",
        fail_perct: "45",
      },
    ];
    return (
      <div>
        <h3 className="top-heading">Scenario Detail Report</h3>
        <div className="container-fluid mt-4">
          <div className="row Project-info">
            <div className="col-6 row">
              <div className="col-5  projectclassName">
                <label>Project(s):</label>
              </div>
              <div className="col-7">
                <select name="testCaseType" className="form-control">
                  <option>Select Project(s)</option>
                </select>
              </div>
            </div>
            <div className="col-6 row">
              <div className="col-5  projectclassName">
                <label>Builds(s):</label>
              </div>
              <div className="col-7">
                <select name="testCaseType" className="form-control">
                  <option>Select Build(s)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row Project-info">
            <div className="col-6 row">
              <div className="col-5  projectclassName">
                <label>Branch(s):</label>
              </div>
              <div className="col-7">
                <select name="testCaseType" className="form-control">
                  <option>Select Branch(s)</option>
                </select>
              </div>
            </div>
            <div className="col-6 row">
              <div className="ml-auto col-7">
                <button type="button" className="btn submit-button w-50">
                  View Report
                </button>
              </div>
            </div>
          </div>

        <div className="mt-5">
          <h4 className="side-heading">Scenario Execution Summary</h4>
          <div className="row Project-info">
            <div className="col-12">
                <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    {headings.map((heading, index) => (
                      <th key={index}>{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {details.map((detail, detailIndex) => (
                    <tr key={detailIndex}>
                      {Object.keys(detail).map((record, recordIndex) => (
                        <td key={recordIndex}>
                          <div className="d-flex justify-content-between">
                            <div>{detail[record]}</div>
                            <div>
                              {recordIndex === 0 && (
                                <i
                                  className="fa fa-search"
                                  aria-hidden="true"
                                ></i>
                              )}
                            </div>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
            </Table>
            </div>
            </div>
            </div>
        </div>

        <ModalPopup
          show={this.state.modalShow}
          onHide={this.setModalShow}
          params={this.state.params}
          modalType={this.state.modalType}
        />
      </div>
    );
  }
  openModal = (event, type, detail) => {
    detail.results = ["Pass", "Pass", "Fail"];
    detail.builds = [
      "Sep 28 2020 @ 02:09:21.000",
      "Sep 18 2020 @ 02:09:21.000",
      "Sep 9 2020 @ 02:09:21.000",
    ];
    this.setState({
      modalShow: true,
      modalType: type,
      params: detail,
    });
  };

  setModalShow = () => {
    this.setState({
      modalShow: !this.state.modalShow,
    });
  };
}

export default Detail;
