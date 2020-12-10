import React,{Component, forwardRef} from 'react';
import './Execution.scss'
// import {ButtonToolbar} from 'react-bootstrap';
// import ConsoleOutputModal from '../common/consolepopup/ConsoleOutputModal';
// import { getBuildInfo } from '../common/jenkins-utils/Utils';
// import { connect } from 'react-redux';
import { FadeLoader } from "react-spinners";
import BuildItem from './buildItem/buildItem';
import { Badge, Table } from 'react-bootstrap';
const ref = React.createRef();


const mapStateToProps = (state) => {
    return {
      jsonPath : state.jsonPath
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        addJsonPath : (value) => {
        dispatch({
            type : "ADD_JSON_PATH",
            payload : value
        })
        }
    }
}

class Execution extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            buildInfo : null,
            consoleModalShow : false,
            jobName : this.props.jobName,
            loading : true,
            threadCount : this.props.threadCount,
            lastBuildNumber : '',
            previousBuilds : [],
        }
    }
    async componentDidMount() {
        // this.props.jobName && getBuildInfo(this.props.jobName, 'lastCompletedBuild').then((res) => { 
        //     this.setState({
        //         buildInfo : res.data,
        //         loading: false,
        //         lastBuildNumber : res.data.number
        //     });
        //     let path = res.data['actions'][0] && res.data['actions'][0]['parameters'] && 
        //                     res.data['actions'][0]['parameters'].filter((parameter) => { 
        //                         if(parameter['name'] === 'testSuiteType') { 
        //                             return true;
        //                         }
        //                     });
                           
        //     path = path && path[0] && path[0].value && path[0].value.split(' ')[0];
        //     path = path.substring(0,path.lastIndexOf("/features")+1);
                            
        //     this.props.addJsonPath(path);
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
    }
    reRenderInfo = (jobName, threadCount, lastCompletedBuild) => {
        // getBuildInfo(jobName, lastCompletedBuild).then((res) => { 
        //     this.setState({
        //         buildInfo : res.data,
        //         jobName : jobName,
        //         loading : false,
        //         lastBuildNumber : res.data.number,
        //         threadCount : threadCount
        //     }, () => {
        //          //ref.current.updateInfo(this.state.jobName);
        //         this.getPrevBuildInfo();
        //         //console.log(this.state.buildInfo['actions'])
        //     });
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
    }

    async getPrevBuildInfo() {
        let Obj = [];
        for(let i=this.state.lastBuildNumber-this.state.threadCount + 1; i<= this.state.lastBuildNumber ;i++ ){
            // await getBuildInfo(this.props.jobName, i).then((res) => { 
            //     Obj.push({
            //         buildInfo : res.data,
            //         //jobName : jobName,
            //         loading : false
            //     });
            // })
            // .catch((err) => {
            //     console.log(err);
            // });
        }
        this.setState({
            previousBuilds : Obj
        }, () => {
            //ref.current.updateInfo(this.state.jobName);
            //console.log(this.state);
        });
    }

    openConsoleOutput = () => {
        this.setConsoleModalShow();
    }

    setConsoleModalShow = () => {
        this.setState({
            consoleModalShow : !this.state.consoleModalShow,
        })
     }

    render(){
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
      ];
        console.log(this.state.previousBuilds);
        return (
          // <React.Fragment>
          //     { this.state.loading ? (
          //         <div className="loader1">
          //         <span>Getting last build info...</span>
          //         <FadeLoader
          //         size={15}
          //         color={"#11b7e6"}
          //         loading={true}
          //         />
          //         </div>) : (
          //             <div className="mt-3">
          //                 {/* <span className="pl-2 row ml-4 mr-4">Build Info</span> */}
          //                 {
          //                     this.state.previousBuilds && this.state.previousBuilds.map((item,index) => {
          //                             return <BuildItem buildInfo={item.buildInfo} ref={ref} jobName={this.state.jobName} ></BuildItem>
          //                     })
          //                 }
          //             </div>
          //         )
          //     }
          // </React.Fragment>
          <React.Fragment>
            <div className="">
              <div className="row">
                  <div className="col-6 text-center execution-head">
                    <h4 className="h-line-height-execution h-color m-0">
                      Build Number : 87
                    </h4>
                  </div>
                  <div className="col-6 text-center execution-head ml-auto">
                    <button className="btn btn-secondary btn-sm m-1">
                      <i class="fa fa-eye" aria-hidden="true"></i> View Logs{" "}
                    </button>
                    <span className="badge-size">
                      <Badge variant="success" className="badge-padding">
                        <i className="fa fa-check"></i> Build successful
                      </Badge>
                    </span>
                  </div>
              </div>
              <div className="row">
                <div className="col-12">
              <Table responsive bordered striped>
                <thead>
                  <tr>
                    <th>Parameter Name</th>
                    <th>Parameter Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Module</td>
                    <td>NAPT Demo</td>
                  </tr>
                  <tr>
                    <td>Project Name</td>
                    <td>API Demo</td>
                  </tr>
                  <tr>
                    <td>Test Env</td>
                    <td>ApiURL</td>
                  </tr>
                  <tr>
                    <td>Test Suite Type</td>
                    <td>Features, ApiDemo</td>
                  </tr>
                  <tr>
                    <td>Browser</td>
                    <td>Safari</td>
                  </tr>
                  <tr>
                    <td>OS</td>
                    <td>Mac</td>
                  </tr>
                  <tr>
                    <td>Test Case Type</td>
                    <td>API</td>
                  </tr>
                  <tr>
                    <td>Thread Count</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Release</td>
                    <td>1.0.0</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>mparekh@nisum.com</td>
                  </tr>
                  <tr>
                    <td>web URL</td>
                    <td>https://samples.org</td>
                  </tr>
                  <tr>
                    <td>OS</td>
                    <td>Mac</td>
                  </tr>
                  <tr>
                    <td>Browser Name</td>
                    <td>Safari</td>
                  </tr>
                </tbody>
              </Table>
              </div>
              </div>
            </div>
          </React.Fragment>
        );
    }
}
export default Execution;