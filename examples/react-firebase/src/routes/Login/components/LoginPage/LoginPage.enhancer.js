import PropTypes from 'prop-types'
import { withHandlers, compose, setPropTypes, setDisplayName } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { withNotifications } from 'modules/notification'
import styles from './LoginPage.styles'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedLoginPage'),
  // add props.showError
  withNotifications,
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
      props.showError(formErrs ? 'Form Invalid' : err.message || 'Error'),
    googleLogin: props => e => {
      // TODO: Add google login logic
    },
    emailLogin: props => e => {
      // TODO: Add email login logic
    }
  }),
  // Add styles as props.classes
  withStyles(styles, { withTheme: true })
)
