import React, { useState } from 'react'

import FormInput from '../FormInput/FormInput'

import CustomButton from '../CustomButton/CustomButton'

import './SignIn.scss'

const SignIn = () => {
  const [formState, setFormState] = useState({ email: '', password: '' })

  const handleSubmit = (event) => {
    event.preventDefault()

    setFormState({ email: '', password: '' })
  }

  const handleChange = (event) => {
    const { value, name } = event.target

    setFormState({ ...formState, [name]: value })
  }

  const { email, password } = formState
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <CustomButton type='submit'> Sign in </CustomButton>
      </form>
    </div>
  )
}

export default SignIn
