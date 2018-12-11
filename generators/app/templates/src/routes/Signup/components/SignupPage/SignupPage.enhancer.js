import PropTypes from 'prop-types'<% if (includeRedux) { %>
import { withFirebase } from 'react-redux-firebase'<% } %>
import { withHandlers, compose, setPropTypes, setDisplayName } from 'recompose'
import { withStyles } from '@material-ui/core/styles'<% if (includeRedux) { %>
import { UserIsNotAuthenticated } from 'utils/router'<% } %>
import { withNotifications } from 'modules/notification'
import styles from './SignupPage.styles'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedSignupPage'),<% if (includeRedux) { %>
  // Redirect to list page if user is already authed
  UserIsNotAuthenticated,<% } %>
  // Add props.showError
  withNotifications,<% if (includeRedux) { %>
  // Add props.firebase (used in handlers)
  withFirebase,<% } %>
  // Set proptypes used in HOCs
  setPropTypes({
    showError: PropTypes.func.isRequired, // used in handlers
    firebase: PropTypes.shape({
      login: PropTypes.func.isRequired, // used in handlers
      createUser: PropTypes.func.isRequired // used in handlers
    })
  }),
  // Add handlers as props
  withHandlers({
    onSubmitFail: props => (formErrs, dispatch, err) =>
      props.showError(formErrs ? 'Form Invalid' : err.message || 'Error'),<% if (includeRedux) { %>
    googleLogin: ({ firebase, showError, router }) => event =>
      firebase
        .login({ provider: 'google', type: 'popup' })
        .catch(err => showError(err.message)),<% } %><% if (!includeRedux) { %>
    googleLogin: props => e => {
      // TODO: Add google login logic
    },<% } %><% if (includeRedux) { %>
    emailSignup: ({ firebase, showError }) => creds =>
      firebase
        .createUser(creds, {
          email: creds.email,
          username: creds.username
        })
        .catch(err => showError(err.message))<% } %><% if (!includeRedux) { %>
    emailSignup: props => e => {
      // TODO: Add email signup logic
    }<% } %>
  }),
  // Add styles as props.classes
  withStyles(styles)
)
