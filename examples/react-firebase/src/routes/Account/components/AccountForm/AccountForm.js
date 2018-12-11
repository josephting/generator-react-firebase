import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import ProviderDataForm from '../ProviderDataForm'

const AccountForm = ({ classes, account }) => (
  <div className={classes.container}>
    <h4>Account</h4>
    <div>
      <TextField
        floatingLabelText="Username"
      />
    </div>
    <div>
      <TextField
        hintText="someone@email.com"
        floatingLabelText="Email"
      />
    </div>
    <div>
      <h4>Linked Accounts</h4>
      {
        account && account.providerData &&
          <ProviderDataForm
            providerData={account.providerData}
          />
      }
    </div>
  </div>
)

AccountForm.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  account: PropTypes.object
}

export default AccountForm
