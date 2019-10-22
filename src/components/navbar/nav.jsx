import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { connect} from 'react-redux';


const totalItems = (items) => {
    let sum = 0; 
    for(let i=0; i<items.length; i++){
        sum += items[i].value;
    }
    return sum;
}

const Navigation = (props) => {
   return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
            Shopping Cart
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <h2 className="label label-size label-danger">Balance ${props.balance}</h2>
            <Nav pullRight>
                <NavItem eventKey={1} className="pullRight">
                    <span className="glyphicon glyphicon-shopping-cart cart-size"></span>
                    <span className="cart cart-value">{totalItems(props.counters)}</span>
                </NavItem>                
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

const mapStateToProps = (state) => {
    return {
        counters : state.counters,
        balance: state.payments.balance
    }
};

export default connect(mapStateToProps)(Navigation);
