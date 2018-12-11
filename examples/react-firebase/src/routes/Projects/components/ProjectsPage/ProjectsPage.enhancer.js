
import { withRouter } from 'react-router-dom'
import { compose, withHandlers, withStateHandlers, setDisplayName } from 'recompose'
import firebase from 'firebase/app'
import { withStyles } from '@material-ui/core/styles'
import { LIST_PATH } from 'constants/paths'
import { withNotifications } from 'modules/notification'
import { spinnerWhileLoading } from 'utils/components'
import { UserIsAuthenticated } from 'utils/router'
import styles from './ProjectsPage.styles'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedProjectsPage'),
  // Add props.router
  withRouter,
  // Add props.showError and props.showSuccess
  withNotifications,
  // Add state and state handlers as props
  withStateHandlers(
    // Setup initial state
    ({ initialDialogOpen = false }) => ({
      newDialogOpen: initialDialogOpen
    }),
    // Add state handlers as props
    {
      toggleDialog: ({ newDialogOpen }) => () => ({
        newDialogOpen: !newDialogOpen
      })
    }
  ),
  // Add handlers as props
  withHandlers({
    addProject: props => newInstance => {
      const { showError, showSuccess, toggleDialog, firebase } = props
      if (!firebase.auth().currentUser) {
        return showError('You must be logged in to create a project')
      }
      return firebase.firestore()
        .collection('projects')
        .add({
          ...newInstance,
          createdBy: firebase.auth().currentUser,
          createdAt: firebase.database.ServerValue.TIMESTAMP
        })
        .then(() => {
          toggleDialog()
          showSuccess('Project added successfully')
        })
        .catch(err => {
          console.error('Error:', err) // eslint-disable-line no-console
          showError(err.message || 'Could not add project')
          return Promise.reject(err)
        })
    },
    deleteProject: props => projectId => {
      const { showError, showSuccess } = props
      return firebase.firestore()
        .collection('projects')
        .doc(projectId)
        .remove()
        .then(() => showSuccess('Project deleted successfully'))
        .catch(err => {
          console.error('Error deleting project:', err) // eslint-disable-line no-console
          showError(err.message || 'Could not delete project')
          return Promise.reject(err)
        })
    },
    goToProject: ({ history }) => projectId => {
      history.push(`${LIST_PATH}/${projectId}`)
    }
  }),
  // Add styles as props.classes
  withStyles(styles)
)
