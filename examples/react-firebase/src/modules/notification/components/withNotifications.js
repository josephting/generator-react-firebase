import { compose, withHandlers } from 'recompose'
import * as actions from '../actions'

const withNotifications = compose(
  withHandlers({
    showError: ({ store }) => err => actions.showError(err)(store.dispatch),
    showSuccess: ({ store }) => err => actions.showSuccess(err)(store.dispatch),
    dismissNotification: ({ store }) => id =>
      actions.dismissNotification(id)(store.dispatch)
  })
)

export default withNotifications
