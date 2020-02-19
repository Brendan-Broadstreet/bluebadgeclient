import React, {useState} from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler, 
    Nav,
    NavItem,
    Button
} from 'reactstrap';

const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle=()=>{
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen)
    }
    return (
        <Navbar color="primary" light expand="md">
            <NavbarBrand className="text-light" href="/">WAG List</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                            { props.token ? <Button onClick={props.clickLogout}>Logout</Button>: null}
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}
export default Sitebar;