import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Firebase from 'firebase'
import ThemeSettings from 'theme'
import { firebase as config } from '../../config'

const theme = createMuiTheme(ThemeSettings)

const { apiKey, authDomain, databaseURL, storageBucket } = config

// Initialize Firebase
Firebase.initializeApp({ apiKey, authDomain, databaseURL, storageBucket })

const App = ({ routes }) => (
  <Router>{routes}</Router>
)

App.propTypes = {
  routes: PropTypes.object.isRequired
}

export default App
