import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import TextField from '@material-ui/core/TextField'

export default class NewProjectDialog extends React.Component {
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
}
