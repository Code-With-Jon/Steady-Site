import React from 'react'
import { Row, Col, Container } from "react-reflex-grid";
import emailjs from 'emailjs-com';

export default class ContactForm extends React.Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        formSubmitted: false
    }

    static sender = 'sender@example.com';

    handleSubmit(event) {
        event.preventDefault();

        const {
            REACT_APP_EMAILJS_RECEIVER: REACT_APP_EMAILJS_RECEIVER,
            REACT_APP_EMAILJS_TEMPLATEID: REACT_APP_EMAILJS_TEMPLATEID,
            REACT_APP_EMAILJS_USERID: REACT_APP_EMAILJS_USERID,
        } = this.props.env;

        this.sendFeedback(
            REACT_APP_EMAILJS_TEMPLATEID,
            this.sender,
            REACT_APP_EMAILJS_RECEIVER,
            this.state.message,
            REACT_APP_EMAILJS_USERID
        );

        this.setState({
            formSubmitted: true
        });
    }

    // Note: this is using default_service, which will map to whatever
    // default email provider you've set in your EmailJS account.
    sendFeedback(templateId, senderEmail, receiverEmail, message, user) {

        emailjs.send('SendUsingGmail', 'template_9Tp2JIIg', {
            senderEmail,
            receiverEmail,
            message
        },
            'user_XbsklnvsbFKZ5daZvtGX9'
        )
            .then(res => {
                this.setState({
                    formEmailSent: true
                });
            })
            // Handle errors here however you like
            .catch(err => console.error('Failed to send feedback. Error: ', err));
    }



    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }





    render() {
        return (
            <div style={{ height: '600px', background: 'white' }}>
                <div >
                    <h4 style={{ color: 'rebeccapurple', paddingTop: '3%' }}>Get In Touch</h4>
                    <h2>Contact</h2>
                </div>
                <div style={{ width: '50%', marginLeft: '22%', display: 'flex' }}>
                    <div className="form-container" style={{ width: '100%', marginLeft: '13%' }}>
                        <form id='Contact' onSubmit={this.handleSubmit.bind(this)}>
                            <Row>

                                <input style={{ background: 'white', marginLeft: '30%' }} value={this.state.name} onChange={this.handleChange.bind(this, 'name')} type='text' placeholder='Enter your name' name='name' />

                                <input style={{ background: 'white' }} value={this.state.email} onChange={this.handleChange.bind(this, 'email')} type='email' placeholder='Enter your email' name='email' />

                                <Col size={12}>
                                    <input style={{ background: 'white', width: '70%' }} value={this.state.subject} onChange={this.handleChange.bind(this, 'subject')} type='text' placeholder="Subject" name='subject' />
                                </Col>
                                <Col size={12}>
                                    <input style={{ background: 'white', width: '70%', height: '100px', paddingBottom: '10%' }} value={this.state.message} onChange={this.handleChange.bind(this, 'message')} type='text-area' placeholder="Write message" name='message' />
                                </Col>
                                <Row>
                                    <button style={{ background: 'rebeccapurple', color: 'white' }} >Submit Form</button>
                                </Row>
                            </Row>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}