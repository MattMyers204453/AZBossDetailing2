import React, { Component } from 'react';
import './Form.css';
import Field from './Field';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {
                fullname: '',
                phone: '',
                make: '',
                model: ''
            },
            submitting: false,
            error: false,
            submitComplete: props.submitComplete
        };
        this.onHandleChangeName = this.onHandleChangeName.bind(this);
        this.onHandleChangePhone = this.onHandleChangePhone.bind(this);
        this.onHandleChangeMake = this.onHandleChangeMake.bind(this);
        this.onHandleChangeModel = this.onHandleChangeModel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onHandleChangeName(event) {
        this.setState({
            message: { ...this.state.message, ['fullname']: event.target.value }
        });
    }
    onHandleChangePhone(event) {
        this.setState({
            message: { ...this.state.message, ['phone']: event.target.value }
        });
    }
    onHandleChangeMake(event) {
        this.setState({
            message: { ...this.state.message, ['make']: event.target.value }
        });
    }
    onHandleChangeModel(event) {
        this.setState({
            message: { ...this.state.message, ['model']: event.target.value }
        });
    }

    // When submit button is pressed, hit the messages endpoint, 
    // which then triggers the Twillio magic
    onSubmit(event) {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!this.state.message.phone.match(phoneno)) {
            alert("Please enter a valid phone number.");
            return;
        }
        event.preventDefault();
        axios.post('/api/v1/test', {
            fullname: this.state.message.fullname,
            phone: this.state.message.phone,
            make: this.state.message.make,
            model: this.state.message.model
        })
            .then((response) => {
                this.setState({
                    error: false,
                    submitting: false,
                    message: {
                        fullname: '',
                        phone: '',
                        make: '',
                        model: ''
                    }
                });
                this.state.submitComplete();
            }, (error) => {
                this.setState({
                    error: true,
                    submitting: false
                });
                this.state.submitComplete();
            });
            
    }

    render() {
        return (
            <div>
                <Field onChange2={this.onHandleChangeName} name={"fullname"} label={"Full Name"} />
                <Field onChange2={this.onHandleChangePhone} name={"phone"} label={"Phone Number"} />
                <Field onChange2={this.onHandleChangeMake} name={"make"} label={"Make"} />
                <Field onChange2={this.onHandleChangeModel} name={"model"} label={"Model"} />
                <button type="button" disabled={this.state.submitting} class="btn btn-dark" onClick={this.onSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}

export default Form;
