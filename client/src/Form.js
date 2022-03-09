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
        console.log("fullname: " + this.state.message.fullname);
    }
    onHandleChangePhone(event) {
        this.setState({
            message: { ...this.state.message, ['phone']: event.target.value }
        });
        console.log("phone: " + this.state.message.phone);
    }
    onHandleChangeMake(event) {
        this.setState({
            message: { ...this.state.message, ['make']: event.target.value }
        });
        console.log("make: " + this.state.message.make);
    }
    onHandleChangeModel(event) {
        this.setState({
            message: { ...this.state.message, ['model']: event.target.value }
        });
        console.log("model: " + this.state.message.model);
    }

    // When submit button is pressed, hit the messages endpoint, 
    // which then triggers the Twillio magic
    onSubmit(event) {
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
        /*
          .then(data => {
              if (data.success) {
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
              } else {
                  this.setState({
                      error: true,
                      submitting: false
                  });
              }
          })
          .then(() => {
              this.state.submitComplete();
          });
          */
        /*
        this.setState({ submitting: true });
        fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.message)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
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
                } else {
                    this.setState({
                        error: true,
                        submitting: false
                    });
                }
            })
            .then(() => {
                this.state.submitComplete();
            });
            */
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
