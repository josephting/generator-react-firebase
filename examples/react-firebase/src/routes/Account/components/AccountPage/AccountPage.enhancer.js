import PropTypes from 'prop-types'
import { compose, withHandlers } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import firebase from 'firebase/app'
import styles from './AccountPage.styles'

export default compose(
  // Add handlers as props
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
  }),
  // Add styles as props.classes
  withStyles(styles)
)
