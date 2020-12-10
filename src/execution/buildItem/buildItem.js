import React, { Component } from 'react';
// import ConsoleOutputModal from '../../common/consolepopup/ConsoleOutputModal';
import {ButtonToolbar} from 'react-bootstrap';
const ref = React.createRef();

class buildItem extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            consoleModalShow : false,
        }
		
    }
	
    openConsoleOutput = () => {
        this.setConsoleModalShow();
    }

    setConsoleModalShow = () => {
        this.setState({
            consoleModalShow : !this.state.consoleModalShow,
        })
     } 

    render() {
        const buildInfo = this.props.buildInfo;
        let jobName = buildInfo && buildInfo.fullDisplayName.split(' ');
        const statusClass = buildInfo && buildInfo.result && (buildInfo.result === 'SUCCESS' ? 'success' : 'danger');
        const statusIcon = statusClass && (statusClass === 'success' ? 'check' : 'exclamation-triangle');
        const buildNumber = buildInfo && buildInfo.number;
        const buildStatus = buildInfo && (buildInfo.result === 'FAILURE' ? 'FAILED' : buildInfo.result);
		ref && ref.current && ref.current.updateInfo();
        return(
            <React.Fragment>
            <details className="build-info mb-1">
                <summary className="info-header p-2 m-0 row">
                    <div className="d-flex justify-content-between col-11">
                        <span>{jobName[2]}</span>
                        <span>
                            <span>Build no : {buildNumber}</span>
                        </span>
                        <div>
                            <span onClick={this.openConsoleOutput}  className="view-logs">
                                <i className="fa fa-eye mr-1"></i>
                                <span>View Logs</span>
                            </span>
                            <span className={`text-${statusClass}`}>
                                <i className={`fa fa-${statusIcon} mr-1`} aria-hidden="true"></i>
                                <span>BUILD {' ' + buildStatus}(ID:{buildNumber})</span>
                            </span>
                        </div>
                    </div>
                </summary>
                <div className="parameter-list">
                    <div className="list-group-item">
                        <div className="row"> 
                            <span className="col-4"><strong>Parameter Name</strong></span>
                            <span className="col-8"><strong>Parameter Value</strong></span>
                        </div>
                    </div>
                    <ul className="list-group">
                    {buildInfo && buildInfo['actions'][0] && buildInfo['actions'][0]['parameters'] && buildInfo['actions'][0]['parameters'].map((parameter) => {
                        let parameterCopy = Object.assign({} , parameter);
                        if(parameterCopy['name'] === 'testSuiteType') {
                            parameterCopy['value'] = parameterCopy['value'].split(' ').map((item) => {
                                                    return 'features/'+item.replace(/^.*[\\\/]/, '');
                                                })
                                                .join(',  ');
                        }
                        
                        return (
                            <li key={parameterCopy.name} className="list-group-item">
                                <div className="row">
                                    <span className="col-4">{parameterCopy.name}</span>
                                    <span className="col-8">{parameterCopy.value}</span>
                                </div>
                            </li>
                        ) 
                    })}
                    </ul>
                </div>
            </details>
            <ButtonToolbar>
                {/* <ConsoleOutputModal
				ref={ref}
                show={this.state.consoleModalShow} 
                onHide={this.setConsoleModalShow}
                jobName={this.props.jobName}
                buildNumber = {buildNumber}
                /> */}
            </ButtonToolbar>
            
        </React.Fragment>
        )
    }
}

export default buildItem
