import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'

import {useSelector} from "react-redux";
function ModalWindow() {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/*<Button variant="primary" onClick={handleShow}>*/}
            {/*    Launch demo modal*/}
            {/*</Button>*/}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Attention</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Дайте доступ к геоданным
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalWindow;