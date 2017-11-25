import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style.scss'
import { cardClassName, cardBodyClassName, cardTitleClassName, cardFooterClassName } from './../../settings'
import { getElevationClassName } from './../../utils'

const Card = ({ className, children, title, footer, zIndex }) => {
  const classes = cx(cardClassName, getElevationClassName(zIndex), className)
  if (!title && !footer && !children) return null
  return (
    <div className={classes}>
      {title
        ? <div className={cardTitleClassName}>
          {title}
        </div>
        : null
      }
      {children
        ? <div className={cardBodyClassName}>
          {children}
        </div>
        : null
      }
      {footer
        ? <div className={cardFooterClassName}>
          {footer}
        </div>
        : null
      }
    </div>
  )
}

Card.propTypes = {
  /**
   * Classname of the card
   */
  className: PropTypes.string,
  /**
   * Elevation of the card
   */
  zIndex: PropTypes.number,
  children: PropTypes.any
}

export { Card }
export default Card
