import PropTypes from 'prop-types'
import { compose<% if (includeRedux) { %>, setPropTypes<% } %> } from 'recompose'<% if (includeRedux) { %>
import { reduxForm } from 'redux-form'<% } %>
import { withStyles } from '@material-ui/core/styles'<% if (includeRedux) { %>
import { ACCOUNT_FORM_NAME } from 'constants/formNames'<% } %>
import styles from './AccountForm.styles'

export default compose(<% if (includeRedux) { %>
  // Set proptypes used in HOCs
  setPropTypes({
    onSubmit: PropTypes.func.isRequired // used by reduxForm
  }),
  // Add form capabilities
  reduxForm({ form: ACCOUNT_FORM_NAME }),<% } %>
  // Add styles as classes.props
  withStyles(styles)
)
