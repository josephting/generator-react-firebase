import PropTypes from 'prop-types'
import { compose, withHandlers<% if (includeRedux) { %>, setPropTypes<% } %> } from 'recompose'
import { withStyles } from '@material-ui/core/styles'<% if (includeRedux) { %>
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import { spinnerWhileLoading } from 'utils/components'
import { withNotifications } from 'modules/notification'
import { UserIsAuthenticated } from 'utils/router'<% } %><% if (!includeRedux) { %>
import firebase from 'firebase/app'<% } %>
import styles from './AccountPage.styles'

export default compose(
  <% if (includeRedux) { %>UserIsAuthenticated, // Redirect to /login if user is not authenticated
  // Add props.firebase
  withFirebase,
  // Add props.showSuccess and props.showError
  withNotifications,
  connect(({ firebase: { profile } }) => ({
    profile,
    avatarUrl: profile.avatarUrl
  })),
  // Show spinner while profile is loading
  spinnerWhileLoading(['profile']),
  // Set propstypes of props used in HOCs
  setPropTypes({
    showSuccess: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired,
    firebase: PropTypes.shape({
      updateProfile: PropTypes.func.isRequired
    })
  }),
  // Add handlers as props
  withHandlers({
    updateAccount: ({ firebase, showSuccess, showError }) => newAccount =>
      firebase
        .updateProfile(newAccount)
        .then(() => showSuccess('Profile updated successfully'))
        .catch(error => {
          showError('Error updating profile: ', error.message || error)
          console.error('Error updating profile', error.message || error) // eslint-disable-line no-console
          return Promise.reject(error)
        })
  }),<% } else { %>// Add handlers as props
  withHandlers({
    updateAccount: () => newAccount => {
      return firebase.database()
        .ref(`users/${firebase.auth().currentUser.uid}`)
        .update(newAccount)
        .catch(error => {
          console.error('Error updating profile', error.message || error) // eslint-disable-line no-console
          return Promise.reject(error)
        })
    }
  }),<% } %>
  // Add styles as props.classes
  withStyles(styles)
)
