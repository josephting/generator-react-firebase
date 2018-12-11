import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SignupForm = ({ classes, handleSubmit }) => (
  <form className={classes.root} onSubmit={handleSubmit}>
    <div>
      <TextField label='Username' />
    </div>
    <div>
      <TextField
        hintText='someone@email.com'
        label='Email'
      />
    </div>
    <div>
      <TextField
        label='Password'
        type="password"
      />
    </div>
    <div className={classes.submit}>
      <Button
        color="primary"
        type="submit"
        variant="contained"
        onClick={handleSubmit}>
        Login
      </Button>
    </div>
  </form>
)

SignupForm.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  handleSubmit: PropTypes.func
}

export default SignupForm
