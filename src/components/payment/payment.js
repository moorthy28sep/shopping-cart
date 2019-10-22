import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { Button, Alert} from 'react-bootstrap';
import { Pay } from '../../actions/payments';
import {FieldGroup, InputGroupCustom} from '../field-group/field-group'
import './payment.css';


class Payments extends Component {
    constructor(props){
        super(props);
        this.state = {
            mobile_state: null,
            email_state: null,
            name_state: null,
            amount_state: null,
            mobile_help: '',
            email_help: '',
            name_help: '',
            amount_help: '',
            mobile: '',
            email: '',
            name: '',
            show: true,
            productsArray:this.props.counters,
            amount: 0
        };
        this.changeHandle = this.changeHandle.bind(this);
        this.handleDismiss = this.handleDismiss.bind(this);
    }


    static getDerivedStateFromProps(props, state){
            let amount = 0;
            for(let i=0; i<props.counters.length; i++){
                amount += props.counters[i].amount;
            }
            return {
                amount:amount
            }
        // }

        // return null;
    }
    

    changeHandle(e){
        this.setState({[e.target.id+'_state']: '', [e.target.id+'_help']: ''});
        this.setState({[e.target.id]: e.target.value});
    }

    submit(){
        let error = false;
        this.setState({name_help: '', name_state: null});
        this.setState({email_help: '', email_state: null});
        this.setState({mobile_help: '', mobile_state: null});
        this.setState({amount_help: '', amount_state: null});

        if(this.state.name.trim() === ''){
            this.setState({name_help: 'Field can not be empty', name_state: 'error'});
            error = true;
        }

        if(this.state.email.trim() === ''){
            this.setState({email_help: 'Field can not be empty', email_state: 'error'});
            error = true;
        }

        if(this.state.mobile.trim() === ''){
            this.setState({mobile_help: 'Field can not be empty', mobile_state: 'error'});
            error = true;
        }

        if(this.state.amount.toString().trim() === ''){
            this.setState({amount_help: 'Field can not be empty', amount_state: 'error'});
            error = true;
        }

        this.setState({ show: true });

        if(!error){
            this.props.pay(this.state);
        }
    }
    
    handleDismiss() {
        this.setState({ show: false });
    }
    
    paymentRecieved(){
        if(this.props.paymentStatus.paymentId && this.state.show){
            return(
                <div className="payment-status">
                    <Alert bsStyle="success" onDismiss={this.handleDismiss} closeLabel="close">
                        {this.props.paymentStatus.paymentSuccess} Your transaction id is: <strong>{this.props.paymentStatus.paymentId}</strong>
                    </Alert>
                </div>
            );
        }
    }

    paymentError(){
        if(this.props.paymentStatus.paymentError && this.state.show){
            return(
                <div className="payment-status">
                    <Alert bsStyle="danger" onDismiss={this.handleDismiss} closeLabel="close">
                        {this.props.paymentStatus.paymentError}
                    </Alert>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                {this.paymentError()}
                {this.paymentRecieved()}
                <form className="payment-section">
                    <FieldGroup id="name" value={this.state.name} onChange={this.changeHandle} type="text" label="Name & Address" placeholder="Name & Address " help={this.state.name_help} validationState={this.state.name_state} />
                    <FieldGroup id="email" value={this.state.email} onChange={this.changeHandle} type="email" label="Email" placeholder="Email" help={this.state.email_help} validationState={this.state.email_state} />
                    <FieldGroup id="mobile" value={this.state.mobile} onChange={this.changeHandle} type="number" label="Mobile Number" placeholder="Mobile Number" help={this.state.mobile_help} validationState={this.state.mobile_state} />
                    <InputGroupCustom icon="$" id="amount" value={this.state.amount} onChange={this.changeHandle} type="number" label="Payment Amount" placeholder="Amount" help={this.state.amount_help} validationState={this.state.amount_state} />
                    <Button type="button" onClick={() => this.submit()} className="btn btn-primary">Pay</Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        paymentStatus: state.payments,
        counters : state.counters
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        pay: Pay
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Payments);
