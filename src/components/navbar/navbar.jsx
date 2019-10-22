import React from "react";
import { Navbar } from "react-bootstrap";
import { connect} from 'react-redux';

const Navigation = (props) => {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>Cart count {props.counters.filter(c => c.value > 0).length}</Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
};

const mapStateToProps = (state) => {
    return {
        counters : state.counters
    }
};

export default connect(mapStateToProps)(Navigation);
