import { compose, setDisplayName } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { ACCOUNT_PATH } from 'constants/paths'
import styles from './Navbar.styles'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedNavbar'),
  // Add styles as classes prop
  withStyles(styles)
)
