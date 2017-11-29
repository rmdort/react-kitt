import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import ModalWindow from 'react-modal'
import {
  modalClassName,
  modalTitleClassName,
  modalBodyClassName,
  modalFooterClassName,
  modalCloseClassName,
  modalOverlayClassName,
  modalContainerClassName,
} from './../../settings'
import './style.scss'

function Modal({
  isOpen,
  onRequestClose,
  style,
  title,
  children,
  footer,
  type,
  fullScreen,
  ...rest
}) {
  let classes = cx(modalContainerClassName, {
    [`${modalContainerClassName}-${type}`]: type,
    [`${modalContainerClassName}-fullscreen`]: fullScreen,
  })
  return (
    <ModalWindow
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={modalOverlayClassName}
      className={classes}
      {...rest}
    >
      <button className={modalCloseClassName} onClick={onRequestClose}>
        Close
      </button>
      <div className={modalClassName}>
        {title ? <div className={modalTitleClassName}>{title}</div> : null}
        <div className={modalBodyClassName}>
          {typeof children === 'function'
            ? children({ onRequestClose })
            : children}
        </div>
        {footer ? <div className={modalFooterClassName}>{footer}</div> : null}
      </div>
    </ModalWindow>
  )
}

Modal.defaultProps = {
  title: null,
  children: null,
  footer: null,
  type: 'large',
  fullScreen: false,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
}

Modal.propTypes = {
  type: PropTypes.oneOf([null, 'small', 'medium', 'large', 'confirm']),
  fullScreen: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool,
  shouldCloseOnOverlayClick: PropTypes.bool,
}

export { Modal }
export default Modal
