import PropTypes from 'prop-types'
import { compose, setPropTypes<% if (includeRedux) { %>, withStateHandlers, withHandlers<% } %> } from 'recompose'
import { withStyles } from '@material-ui/core/styles'<% if (includeRedux) { %>
import { reduxForm } from 'redux-form'
import { SIGNUP_FORM_NAME } from 'constants/formNames'<% } %>
import styles from './SignupForm.styles'

export default compose(
  // Set proptypes used in HOCs
  setPropTypes({
    onSubmit: PropTypes.func.isRequired // called by handleSubmit
  }),<% if (includeRedux) { %>
  // Add form capabilities (handleSubmit, pristine, submitting)
  reduxForm({
    form: SIGNUP_FORM_NAME
  }),<% } %><% if (!includeRedux) { %>
  // Add state handlers as props
  withStateHandlers({}, {
    handleEmailChange: ({ email }) => (e) => ({
      email: e.target.value,
    }),
    handlePasswordChange: props => value => ({
      password: e.target.value,
    })
  }),
  // Add handlers as props
  withHandlers({
    handleSubmit: ({ email, password, onSubmit }) => () => {
      onSubmit({ email, password })
    },
  }),<% } %>
  // Add styles as props.classes
  withStyles(styles)
)
