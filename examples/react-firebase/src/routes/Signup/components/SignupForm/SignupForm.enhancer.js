import PropTypes from 'prop-types'
import { compose, setPropTypes } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import styles from './SignupForm.styles'

export default compose(
  // Set proptypes used in HOCs
  setPropTypes({
    onSubmit: PropTypes.func.isRequired // called by handleSubmit
  }),
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
  }),
  // Add styles as props.classes
  withStyles(styles)
)
