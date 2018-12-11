import { compose, withHandlers } from 'recompose'<% if (includeRedux) { %>
import { withStore } from 'utils/components'<% } %>
import * as actions from '../actions'

const withNotifications = compose(<% if (includeRedux) { %>
  withStore,<% } %>
  withHandlers({
    showError: ({ store }) => err => actions.showError(err)(store.dispatch),
    showSuccess: ({ store }) => err => actions.showSuccess(err)(store.dispatch),
    dismissNotification: ({ store }) => id =>
      actions.dismissNotification(id)(store.dispatch)
  })
)

export default withNotifications
