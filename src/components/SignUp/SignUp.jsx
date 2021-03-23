import React from 'react'

import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions'

// components
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

import './SignUp.scss'

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      displayName: 'Amir Solo',
      email: 'me@amirsolo.com',
      password: 'amirsolopass',
      confirmPassword: 'amirsolopass'
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    const { signUpStart } = this.props

    if (password !== confirmPassword) {
      return alert("Passwords don't match")
    }

    const userCredentials = { displayName, email, password }
    signUpStart(userCredentials)
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

const mapDisptachToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDisptachToProps)(SignUp)
