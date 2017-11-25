import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { tabClassName, tabPanelsClassName, tabPanelClassName, tabLabelsClassName, tabLabelClassName, tabLabelActiveClassName, tabToggleClassName, tabDefaultClassName, tabShowOneClassName, tabPanelActiveClassName } from './../../settings'
import { withStateHandlers } from 'recompose'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './style.scss'

const Tab = ({ className, children, activeTab, showOne, toggle, animation, animationTimeout, setActiveTab }) => {
  const classes = cx(tabClassName, {
    [`${tabToggleClassName}`]: toggle,
    [`${tabDefaultClassName}`]: !toggle,
    [`${tabShowOneClassName}`]: showOne
  }, className)
  if (!Array.isArray(children)) {
    children = [children]
  }
  /* If animation is disabled reset animationTimeout */
  animationTimeout = !animation ? 0 : animationTimeout
  /* Tab labels */
  const labels = children.map((child) => {
    return child.props.title
  })
  function handleClick (tab) {
    setActiveTab(tab, toggle, showOne)
  }
  return (
    <div className={classes}>
      {toggle
        ? null
        : <nav className={tabLabelsClassName}>
          {labels.map((label, index) => {
            let isActive = activeTab[0] === index
            return (
              <TabLabel
                label={label}
                index={index}
                key={index}
                onClick={handleClick}
                isActive={isActive}
              />
            )
          })}
        </nav>
      }
      <TransitionGroup className={tabPanelsClassName}>
        {children
          .map((child, index) => {
            let isActive = toggle
                ? activeTab.indexOf(index) !== -1
                : index === activeTab[0]
            let panelClass = cx(tabPanelClassName, {
              [`${tabPanelActiveClassName}`]: isActive
            })
            return (
              <div key={index} className={panelClass}>
                {toggle
                  ? <TabLabel
                    label={labels[index]}
                    index={index}
                    onClick={handleClick}
                    isActive={isActive}
                    />
                  : null
                }
                {animation
                  ? <CSSTransition
                    timeout={animationTimeout}
                    classNames={animation || ''}
                    unmountOnExit
                    in={isActive}
                    key={index}
                    >
                    {React.cloneElement(child, { handleClick })}
                  </CSSTransition>
                  : isActive
                      ? child
                      : null
                }
              </div>
            )
          })
        }
      </TransitionGroup>
    </div>
  )
}

/**
 * Tab Label
 */
const TabLabel = ({ label, index, isActive, onClick }) => {
  function handleClick () {
    onClick(index)
  }
  let className = cx(tabLabelClassName, {
    [`${tabLabelActiveClassName}`]: isActive
  })
  return (
    <button
      className={className}
      onClick={handleClick}
      >
      {label}
    </button>
  )
}

/**
 * Default props
 */
Tab.defaultProps = {
  activeTab: [0],
  toggle: false,
  showOne: false,
  animation: false,
  animationTimeout: 200
}

/**
 * Prop types
 */
Tab.propTypes = {
  /**
   * Current active tab
   */
  activeTab: PropTypes.array,
  /**
   * Convert tab to toggle for mobile devices
   */
  toggle: PropTypes.bool,
  /**
   * Convert tab to accordion. `toggle` must be `true`
   */
  showOne: PropTypes.bool,
  /**
   * Animation name - fade, slide or `false` to disable
   */
  animation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  children: PropTypes.any
}

const TabWithState = withStateHandlers(
  {
    activeTab: [0]
  },
  {
    setActiveTab: ({ activeTab }) => (value, toggle, showOne) => {
      return {
        activeTab: toggle && !showOne
          ? activeTab.indexOf(value) !== -1
            ? activeTab.filter((id) => id !== value)
            : [...activeTab, value]
          : [value]
      }
    }
  }
)(Tab)

export { TabWithState as Tab }
export default TabWithState
