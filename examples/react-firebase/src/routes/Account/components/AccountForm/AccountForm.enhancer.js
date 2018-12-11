import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import styles from './AccountForm.styles'

export default compose(
  // Add styles as classes.props
  withStyles(styles)
)
