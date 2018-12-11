import PropTypes from 'prop-types'<% if (includeRedux) { %>
import { withFirebase } from 'react-redux-firebase'<% } %>
import { withHandlers, compose, setPropTypes, setDisplayName } from 'recompose'
import { withStyles } from '@material-ui/core/styles'<% if (includeRedux) { %>
import { UserIsNotAuthenticated } from 'utils/router'<% } %>
import { withNotifications } from 'modules/notification'
import styles from './LoginPage.styles'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedLoginPage'),<% if (includeRedux) { %>
  // redirect to list page if user is already authed
  UserIsNotAuthenticated,<% } %>
  // add props.showError
  withNotifications,<% if (includeRedux) { %>
  // Add props.firebase (used in handlers)
  withFirebase,<% } %>
  // Set proptypes used in HOCs
  setPropTypes({
    showError: PropTypes.func.isRequired, // used in handlers
    firebase: PropTypes.shape({
      login: PropTypes.func.isRequired // used in handlers
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
    emailLogin: ({ firebase, router, showError }) => creds =>
      firebase.login(creds).catch(err => showError(err.message))<% } %><% if (!includeRedux) { %>
    emailLogin: props => e => {
      // TODO: Add email login logic
    }<% } %>
  }),
  // Add styles as props.classes
  withStyles(styles, { withTheme: true })
)
