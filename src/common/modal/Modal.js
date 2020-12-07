import React from 'react'
import {Modal,Button} from 'react-bootstrap';
import './Modal.scss'

function ModalPopup(props) {
  console.log(props)
    let params = Object.assign({},props.params);
    // let extraParams = props.extraParams;
    let extraParams = [];
    for(let item of extraParams) {
        Object.assign(params,item);
    }

    if ( props.modalType === 'createTestSuite')
    return (
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton className="modal-head">
            <Modal.Title id="contained-modal-title-vcenter">
              Create Test Suite
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="row my-3">
            <div className="col-6">
                <select name="project modules" className="form-control" >
                  <option>Project Modules</option>
                </select>
            </div>
            <div className="col-6">
                <input type="text" className="form-control" placeholder="Selected modules"/>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-6">
                <select name="tags" className="form-control" >
                  <option>Tags</option>
                </select>
            </div>

            <div className="col-6">
                <input type="text" className="form-control" placeholder="Selected Tags"/>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-6">
                <p> Preset Name </p>
            </div>

            <div className="col-6">
                <input type="text" className="form-control" placeholder="Preset Name"/>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-2 ml-auto">
              <button
                  type="button"
                  className="btn submit-button"
                >
                  Save
                </button>
            </div>
          </div>
          
          </Modal.Body>
      </Modal>
    )
    else if ( props.modalType === 'createExecPreset') 
    return (
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton className="modal-head">
            <Modal.Title id="contained-modal-title-vcenter">
              Execution Preset
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="row my-3">
            <div className="col-6">
               <p>Select Preset</p>
            </div>

            <div className="col-6">
            <select name="preset name" className="form-control" >
              <option defaultChecked>Select Preset</option>
            </select>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-6">
               <p>Preset Name</p>
            </div>

            <div className="col-6">
                <input type="text" className="form-control" placeholder="Preset Name"/>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-6">
                <p>Maven Config</p>
            </div>

            <div className="col-6">
                <input type="text" className="form-control" placeholder="Maven Config"/>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-2 ml-auto">
              <button
                  type="button"
                  className="btn submit-button"
                >
                  Save
                </button>
            </div>
          </div>
          
          </Modal.Body>
      </Modal>

    )
    else if ( props.modalType === 'createNotiPreset')
    return(
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton className="modal-head">
            <Modal.Title id="contained-modal-title-vcenter">
              Create Notification Preset
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <div className="row my-3">
            <div className="col-6">
               <p>Select Notification</p>
               <p>DL</p>
            </div>

            <div className="col-6">
            <select name="preset name" className="form-control" >
              <option defaultChecked>Select Preset</option>
            </select>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-6">
               <p>Recepient List</p>
            </div>

            <div className="col-4">
                <input type="text" className="form-control" placeholder="List"/>
            </div>
            <div className="col-2">
            <button
                  type="button"
                  className="btn submit-button"
                >
                  Select
                </button>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-6">
                <p>Preset Name</p>
            </div>

            <div className="col-6">
                <input type="text" className="form-control" placeholder="Preset Name"/>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-2 ml-auto">
              <button
                  type="button"
                  className="btn submit-button"
                >
                  Save
                </button>
            </div>
          </div>
          
          </Modal.Body>
         
      </Modal>
    )
    else
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton className="modal-head">
            <Modal.Title id="contained-modal-title-vcenter">
              Build Parameters
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row ml-4">
                <span className="col-4"><strong>Parameter Name</strong></span>
                <span className="col-8"><strong>Parameter Value</strong></span>
            </div>
            <ul>
                {
                Object.keys(params).map((param,index) => {
                return (
                <li key={index} className="row">
                    <span className="col-4">{param}</span>
                    <span className="col-8">{params[param]}</span>
                </li>
                )
                })
                }
            </ul>
            <span>
            </span>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide} className="btn btn-danger">Cancel</Button>
            <Button onClick={props.onBuildButtonClick} className="btn btn-success">Confirm</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default ModalPopup
