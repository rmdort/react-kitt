import React from 'react'
import PropTypes from 'prop-types'
import ModalWindow from 'react-modal'
import { modalClassName, modalTitleClassName, modalBodyClassName, modalFooterClassName, modalCloseClassName, overlayBackground } from './../../settings'
import './style.scss'

const overlayStyle = {
  overlay: {
    backgroundColor: overlayBackground
  }
}

const modalStyles = {
  small: {
    content: {
      width: 600,
      left: '50%',
      marginLeft: -300,
      right: '50%',
      marginRight: -300,
      bottom: 'auto',
      border: 'none',
      padding: 0,
      boxShadow: '0 2px 6px 2px rgba(0,0,0,0.4)'
    }
  },
  medium: {
    content: {
      left: '1rem',
      bottom: '1rem',
      top: '1rem',
      right: '1rem',
      border: 'none',
      padding: 0,
      boxShadow: '0 2px 6px 2px rgba(0,0,0,0.4)'
    }
  },
  large: {
    content: {
      left: '1rem',
      bottom: '1rem',
      top: '1rem',
      right: '1rem',
      border: 'none',
      padding: 0,
      boxShadow: '0 2px 6px 2px rgba(0,0,0,0.4)'
    }
  }
}

const Modal = ({ isOpen, onRequestClose, style, title, children, footer, type }) => {
  return (
    <ModalWindow
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        ...overlayStyle,
        ...modalStyles[type],
        ...style
      }}
    >
      <button className={modalCloseClassName} onClick={onRequestClose}>Close</button>
      <div className={modalClassName}>
        <div className={modalTitleClassName}>
          {title}
        </div>
        <div className={modalBodyClassName}>
          {children}
        </div>
        <div className={modalFooterClassName}>
          {footer}
        </div>
      </div>
    </ModalWindow>
  )
}

Modal.defaultProps = {
  title: null,
  children: null,
  footer: null,
  type: 'small',
  bodyHeight: 400,
}

Modal.propTypes = {
  type: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default Modal