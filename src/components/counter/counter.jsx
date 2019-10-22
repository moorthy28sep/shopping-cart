import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import {increment, decrement, deleteHandle, reset} from '../../actions/index';
import './index.scss';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';



class Counter extends Component {
    
    showZero() {
        const {counter} = this.props;
        return counter.value === 0 ? "Zero" : counter.value;
    }

    badgeClass() {
        let classs = "label label-";
        classs += this.props.counter.value <= 0 ? "warning" : "primary";
        return classs;
    }
 
    incrementTooltip = (text) =>{
        return <Tooltip id={text}><strong>{text}</strong></Tooltip>
    }

    render() {
        const {counter} = this.props;
        return (
            
                <div className="row items">
                    
                        <div className="col-md-1 productImg">
                        
                                <span className="label rate label-success">$ {this.props.counter.rate}</span>
                            
                            <p>Product </p>
                        </div>

                        <div className="col-md-1">
                            <span className={this.badgeClass()}>{this.showZero()}</span>
                        </div>

                        <div className="col-md-1">
                            <OverlayTrigger  placement="top" overlay={this.incrementTooltip("Increment")}>
                                <span className="glyphicon glyphicon-plus pointer" onClick={() => this.props.increment(counter)} />
                            </OverlayTrigger>
                        </div>

                        <div className="col-md-1">
                            <OverlayTrigger placement="top" overlay={this.incrementTooltip("Decrement")}>
                                <span className="glyphicon glyphicon-minus pointer" onClick={() => this.props.decrement(counter)} />
                            </OverlayTrigger>
                        </div>

                        <div className="col-md-1">
                            <OverlayTrigger placement="top" overlay={this.incrementTooltip("Delete")}>
                                <span className="glyphicon glyphicon-remove pointer" onClick={() => this.props.deleteHandle(counter)} />
                            </OverlayTrigger>
                        </div>

                        <div className="col-md-1">
                            
                        </div>
                    
                </div>
                
            
        );
   }
};

const mapStateToProps = (state) => {
    return {
        allCounters: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        increment: increment,
        decrement: decrement,
        deleteHandle: deleteHandle,
        reset: reset
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);