import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'

import {useSelector} from "react-redux";
import Search from "./Search";
function ModalWindow() {

    const [show, setShow] = useState(true);

    const enterCity = () => setShow(!show);

    return (
        <>
            <Modal show={true}>
                <Modal.Header>
                    <Modal.Title>Attention</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { show ? <div>Give access to geodata and reload page or enter your city</div> : <Search/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={enterCity}>
                        Enter city
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalWindow;