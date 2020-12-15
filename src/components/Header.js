import React, { useState } from "react";
import {
  Nav,
  Navbar,
  Image,
  Button
} from "react-bootstrap";

import AlertModal from "./AlertModal";

export default function Header() {
  const [errorModal, setErrorModal] = useState(false);

  const handleConnectMetamask = () => {
    if (isMetamaskInstalled()) {
      //init
    } else {
      setErrorModal(true);
    }
  };

  const isMetamaskInstalled = () => {
    return (typeof window.ethereum !== 'undefined');
  }

  return (
    <div>
      <Navbar collapseOnSelect bg="light" variant="light">
        <Navbar.Brand href="#">
          BSC Coupon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="mr-auto">
          
        </Nav>
        <Nav>
          <Button
            onClick={handleConnectMetamask}
            >ConnectMetamask
          </Button>
        </Nav>
      </Navbar>

      <AlertModal
        open={errorModal}
        toggle={() => setErrorModal(false)}
      >
        You should connect with Metamask.            
      </AlertModal>
    </div>
  )
}
