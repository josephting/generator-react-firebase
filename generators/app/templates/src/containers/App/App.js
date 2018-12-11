import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'<% if (includeRedux) { %>
import { Provider } from 'react-redux'<% } %><% if (!includeRedux) { %>
import Firebase from 'firebase'<% } %>
import ThemeSettings from 'theme'<% if (!includeRedux) { %>
import { firebase as config } from '../../config'<% } %>

const theme = createMuiTheme(ThemeSettings)<% if (!includeRedux) { %>

const { apiKey, authDomain, databaseURL, storageBucket } = config

// Initialize Firebase
Firebase.initializeApp({ apiKey, authDomain, databaseURL, storageBucket })

const App = ({ routes }) => (
  <Router>{routes}</Router>
)<% } else { %>const App = ({ routes, store }) => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>{routes}</Router>
    </Provider>
  </MuiThemeProvider>
)<% } %>

App.propTypes = {
  routes: PropTypes.object.isRequired<% if (includeRedux) { %>,
  store: PropTypes.object.isRequired<% } %>
}

export default App
