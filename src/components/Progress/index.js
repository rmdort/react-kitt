import React from 'react'
import PropTypes from 'prop-types'
import ProgressBar from 'react-line-progress'
import './style.scss'

function Progress(props) {
  return <ProgressBar {...props} />
}

Progress.defaultProps = {
  onTop: false,
  percent: 0,
  spinner: false,
  autoIncrement: true,
}

Progress.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number.isRequired,
  onTop: PropTypes.bool,
  autoIncrement: PropTypes.bool,
  spinner: PropTypes.oneOf([false, 'left', 'right']),
}

export { Progress }
export default Progress
