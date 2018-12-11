import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const LoginForm = ({ classes, handleSubmit, handleEmailChange, handlePasswordChange }) => (
  <form className={classes.root} onSubmit={handleSubmit}>
    <div>
      <TextField
        hintText='someone@email.com'
        floatingLabelText='Email'
        onChange={handleEmailChange}
      />
    </div>
    <div>
      <TextField
        type='password'
        floatingLabelText='Password'
        onChange={handlePasswordChange}
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

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  handleEmailChange: PropTypes.func.isRequired, // from enhancer (withStateHandlers)
  handlePasswordChange: PropTypes.func.isRequired, // from enhancer (withStateHandlers)
  handleSubmit: PropTypes.func.isRequired // from enhancer (withHandlers - calls onSubmit)
}

export default LoginForm
