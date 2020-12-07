import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import "./Home.scss";

// Basic module impported
import Header from "./header/Header";
import Sidenav from "./sidenav/Sidenav";
import Footer from "./footer/Footer";

// Routeing modules imported
import Dashboard from './dashboard/Dashboard';


// const mapStateToProps = (state) => {
//   console.log("state",state)
//   return {
//     user : state.user
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//       addUser : (value) => {
//       dispatch({
//           type : "ADD_USER",
//           payload : value
//       })
//       }
//   }
// }

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
      title: "",
    };
  }
  componentDidMount() {
    axios.get("../nav.json").then((res) => {
      this.setState({ links: res.data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="d-flex">
          <div className="p-0 full-width-container">
          <BrowserRouter>
            <Header />
            <div className="d-flex">
              <div className="sidenav pr-0">
                <Sidenav links={this.state.links} />
              </div>
              <div className="main-content">
                  <Route path={`/execution`} component={Dashboard}/>
                  {/* <Route path={`/kibana_project_summary`} component={Summary}/>
                  <Route path={`/kibana_detail`} component={Detail}/> */}
                  {/* <Route path={`/kibana_summary`}  />
                <Route path={`/kibana_detail`}  />
                <Route path={`/fail_report`}  />
                <Route path={`/Logs_detail`}  />
                <Route path={`/vm_management`}  /> */}
              </div>
            </div>
            <Footer />
            </BrowserRouter>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;