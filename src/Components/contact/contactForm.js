import React from 'react'
import { Row, Col, Container } from "react-reflex-grid";


export default class ContactForm extends React.Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }
    handleSubmit(e) {
        // e.preventDefault()
        // const { name, email, subject, message } = this.state
        // let templateParams = {
        //     from_name: email,
        //     to_name: '<YOUR_EMAIL_ID>',
        //     subject: subject,
        //     message_html: message,
        // }
        // emailjs.send(
        //     'gmail',
        //     'template_XXXXXXXX',
        //     templateParams,
        //     'user_XXXXXXXXXXXXXXXXXXXX'
        // )
        // this.resetForm()
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