import React from 'react'
import PropTypes from 'prop-types'<% if (includeRedux) { %>
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'<% } %><% if (!includeRedux) { %>
import TextField from '@material-ui/core/TextField'<% } %>
import Button from '@material-ui/core/Button'<% if (includeRedux) { %>
import { required, validateEmail } from 'utils/form'<% } %>

<% if (includeRedux) { %>const LoginForm = ({ pristine, submitting, handleSubmit, classes }) => (
  <form className={classes.root} onSubmit={handleSubmit}>
    <Field
      name="email"
      component={TextField}
      autoComplete="email"
      label="Email"
      validate={[required, validateEmail]}
    />
    <Field
      name="password"
      component={TextField}
      autoComplete="current-password"
      label="Password"
      type="password"
      validate={required}
    />
    <div className={classes.submit}>
      <Button
        color="primary"
        type="submit"
        variant="contained"
        disabled={pristine || submitting}>
        {submitting ? 'Loading' : 'Login'}
      </Button>
    </div>
  </form>
)

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  pristine: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  submitting: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  handleSubmit: PropTypes.func.isRequired // from enhancer (reduxForm - calls onSubmit)
}

export default LoginForm<% } %><% if (!includeRedux) { %>const LoginForm = ({ classes, handleSubmit, handleEmailChange, handlePasswordChange }) => (
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

export default LoginForm<% } %>
