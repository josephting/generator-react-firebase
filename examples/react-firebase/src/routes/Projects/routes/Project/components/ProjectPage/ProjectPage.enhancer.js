import PropTypes from 'prop-types'
import { get } from 'lodash'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { compose, setPropTypes, setDisplayName, withProps } from 'recompose'
import styles from './ProjectPage.styles'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedProjectPage'),
  // Add props.match
  withRouter,
  // Set proptypes of props used in HOCs
  setPropTypes({
    match: PropTypes.shape({
      params: PropTypes.shape({
        projectId: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }),
  withProps(({ match: { params: { projectId } } }) => ({
    projectId
  })),
  // Add styles as props.classes
  withStyles(styles)
)
