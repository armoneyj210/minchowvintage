import React, { Component } from "react";

handleSubmit (event) {
    event.preventDefault()

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template,
      REACT_APP_EMAILJS_USERID: user
    } = this.props.env

    this.sendFeedback(
      template,
      this.props.senderEmail,
      receiverEmail,
      this.state.feedback,
      user
    )

    this.setState({
      formSubmitted: true
    })
  }

  sendFeedback (templateId, senderEmail, receiverEmail, feedback, user) {
    window.emailjs.send(
      'default_service', // default email provider in your EmailJS account
      templateId,
      {
        senderEmail,
        receiverEmail,
        feedback
      },
      user
    )
      .then(res => {
        this.setState({ formEmailSent: true })
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Failed to send feedback. Error: ', err))
  }
export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <p>Contact Me</p>
        <div>
          <form className="feedback-form" onSubmit={handleSubmit}>
            <h1></h1>
            <input
              className="text-input"
              id="feedback-entry"
              name="feedback-entry"
              onChange={handleChange}
              placeholder="Enter your feedback here"
              required
              value={feedback}
            />
            <div className="btn-group">
              <button className="btn btn--cancel" onClick={handleClose}>
                Cancel
              </button>
              <input type="submit" value="Submit" className="btn btn--submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
