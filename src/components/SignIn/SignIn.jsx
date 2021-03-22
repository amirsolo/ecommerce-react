import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../../utils/firebase'

import { googleSignInStart } from '../../redux/user/user.actions'

// components
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

import './SignIn.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { email, password } = this.state

    try {
      // Sign in with email and password
      await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.error(error)
    }
    // Clear out form inputs
    this.setState({ email: '', password: '' })
  }

  onInputChange = (event) => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { googleSignInStart } = this.props
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.onInputChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.onInputChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton
              onClick={googleSignInStart}
              type='button'
              googleSignIn
            >
              {' '}
              Sign in with Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn)
