import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
<% if (!includeRedux) { %>import TextField from '@material-ui/core/TextField'<% } %><% if (includeRedux) { %>import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import { required } from 'utils/form'<% } %>

<% if (includeRedux) { %>const NewProjectDialog = ({ classes, handleSubmit, open, onRequestClose }) => (
  <Dialog open={open} onClose={onRequestClose}>
    <DialogTitle id="new-project-dialog-title">New Project</DialogTitle>
    <form onSubmit={handleSubmit} className={classes.inputs}>
      <DialogContent>
        <Field
          name="name"
          component={TextField}
          label="Project Name"
          validate={[required]}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onRequestClose} color="secondary">
          Cancel
        </Button>
        <Button type="submit" color="primary">
          Create
        </Button>
      </DialogActions>
    </form>
  </Dialog>
)

NewProjectDialog.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
}

export default NewProjectDialog<% } %><% if (!includeRedux) { %>export default class NewProjectDialog extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    onCreateClick: PropTypes.func.isRequired
  }

  handleInputChange = (e) => {
    e.preventDefault()
    this.setState({
      name: e.target.value,
      error: null
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.name) {
      return this.setState({
        error: 'Name is required'
      })
    }
    if (this.props && this.props.onCreateClick) {
      this.props.onCreateClick(this.state.name)
      this.props.onRequestClose()
    }
  }

  render () {
    const { open, onRequestClose } = this.props
    const { error } = this.state

    return (
      <Dialog open={open} onClose={onRequestClose}>
        <DialogTitle id="new-project-dialog-title">New Project</DialogTitle>
          <DialogContent>
            <TextField
              name="name"
              onChange={this.handleInputChange}
              component={TextField}
              label="Project Name"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onRequestClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Create
            </Button>
          </DialogActions>
      </Dialog>
    )
  }
}<% } %>
