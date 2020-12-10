import React from "react";
import "./Summary.scss";
import Table from "react-bootstrap/Table";
import Chart from "chart.js";

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

render() {
  const headings = [
    'Project',
    'Pass Count',
    'Fail Count',
    'Total',
    'Pass %',
    'Fail %'
  ];
  const tableData = [
    {"project": "E Commerce Web","pass_count": 69, "fail_count": 31, "total": 100, "pass_percentage": 89, "fail_percentage": 31},
    {"project": "E Commerce Mobile","pass_count": 98, "fail_count": 66, "total": 132, "pass_percentage": 69, "fail_percentage": 54},
    {"project": "E Commerce Desktop","pass_count": 45, "fail_count": 21, "total": 98, "pass_percentage": 84, "fail_percentage": 12},
    {"project": "Admin application Web","pass_count": 54, "fail_count": 21, "total": 109, "pass_percentage": 77, "fail_percentage": 22}
  ]
    return (
      <div>
        <h3 className="top-heading">Project Execution Summary Report</h3>

        <div className="container-fluid mt-4">
          <div className="row Project-info">
            <div className="col-6 row">
              <div className="col-5">
                <label>Project(s)</label>
              </div>
              <div className="col-7">
                <select name="projects" className="form-control">
                  <option>Select Project(s)</option>
                </select>
              </div>
            </div>
            <div className="col-6 row">
              <div className="col-5">
                <label>Build(s)</label>
              </div>
              <div className="col-7">
                <select name="builds" className="form-control">
                  <option>Select Build(s)</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mt-2 Project-info">
            <div className="col-6 row">
              <div className="col-5">
                <label>Branch(s)</label>
              </div>
              <div className="col-7">
                <select name="branch" className="form-control">
                  <option>Select Branch(s)</option>
                </select>
              </div>
            </div>

            <div className="col-6 row">
              <div className="ml-auto col-7">
                <button className="btn submit-button w-50">View Report</button>
              </div>
              </div>

          </div>

          <div className="mt-5">
          <h4 className="side-heading">Project Execution Summary</h4>
          {/* Table goes here  */}
          <div className="row Project-info">
            <div className="col-12">
              <Table responsive bordered striped hover>
                <thead>
                  <tr>
                    {headings.map((heading, index) => (
                      <th key={index}>{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index}>
                      {Object.keys(item).map((element, subIndex) => (
                        <td key={subIndex}>
                          <div className="d-flex justify-content-between">
                            <div>{item[element]}</div>
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
          <div className="mt-3">
          <h4 className="side-heading">Last 30 Builds</h4>
          {/* chart goes here */}
          <div className="chart-container Project-info">
            <canvas id="barchart" ref={this.chartRef}></canvas>
          </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const barChartRef = this.chartRef.current.getContext("2d");
    new Chart(barChartRef, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
        datasets: [
          {
            label: "Builds",
            data: [65, 59, 80, 81, 63, 66, 78],
            fill: false,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });
  }
}

export default Summary;
