/* eslint-disable no-console */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapProps, branch, renderComponent } from 'recompose'
import LoadableComponent from 'react-loadable'
import LoadingSpinner from 'components/LoadingSpinner'

/**
 * Show a loading spinner when a condition is truthy. Used within
 * spinnerWhileLoading. Accepts a test function and a higher-order component.
 * @param  {Function} condition - Condition function for when to show spinner
 * @return {HigherOrderComponent}
 */
export function spinnerWhile(condition) {
  return branch(condition, renderComponent(LoadingSpinner))
}



/**
 * Create component which is loaded async, showing a loading spinner
 * in the meantime.
 * @param {Object} opts - Loading options
 * @param {Function} opts.loader - Loader function (should return import promise)
 */
export function Loadable(opts) {
  return LoadableComponent({
    loading: LoadingSpinner,
    ...opts
  })
}
