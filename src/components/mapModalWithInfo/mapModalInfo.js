import React from 'react';
import Modal from 'react-bootstrap/Modal';


function MapModalInfo(props) {
    console.log(props);

    return (
        <div>
            <Modal
                show={props.show}
                onHide={() => props.setShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal"

            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <img style={{ width: '30px' }} src={props.currentMarkerInfo.icon} alt={props.currentMarkerInfo.name} /> {props.currentMarkerInfo.name}   <span className="text-secondary fs-6"> ({props.currentMarkerInfo.business_status} ) </span>
        </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody ">
                    <img className="w-100" src="https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg" alt={props.currentMarkerInfo.name}/>
                    <h3>Address</h3>
                    <p>{props.currentMarkerInfo.vicinity} </p>
                    <h3> Rating</h3>
                    <p> {props.currentMarkerInfo.rating} </p>
                    


                </Modal.Body>

            </Modal>
        </div>
    )
}

export default MapModalInfo;
