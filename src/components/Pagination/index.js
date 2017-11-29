import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.scss'

class Pagination extends React.Component {
  static defaultProps = {
    ellipsis: '...',
    edges: 2,
    limit: 10,
    perPage: 10,
    currentPage: 1,
    totalResults: 0,
    onChange: null,
    labelPageNext: 'Next',
    labelPagePrev: 'Prev',
    scrollTop: false,
  }

  static propTypes = {
    totalResults: PropTypes.number.isRequired,
    currentPage: PropTypes.any,
    perPage: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    labelPageNext: PropTypes.string,
    labelPagePrev: PropTypes.string,
    scrollTop: PropTypes.bool,
    edges: PropTypes.number,
    ellipsis: PropTypes.string,
    limit: PropTypes.number,
  }

  prevPage = () => {
    let { currentPage } = this.props

    --currentPage

    if (currentPage < 1) currentPage = 1

    this.selectPage(currentPage)
  }

  nextPage = () => {
    let { currentPage, totalResults, perPage } = this.props
    let totalPages = Math.ceil(totalResults / perPage)

    ++currentPage

    if (currentPage > totalPages) currentPage = totalPages

    this.selectPage(currentPage)
  }

  selectPage = page => {
    let { onChange, scrollTop } = this.props

    if (onChange) {
      return onChange(page)
    }

    if (scrollTop) this.pagination.parentNode.scrollIntoView()
  }

  createPageList(start, end, limit, left, right, ellipsis) {
    let list = []
    for (let i = start; i <= end; i++) {
      if (i === 1 || i === parseInt(end) || end < limit) {
        list.push(i)
      } else {
        if (i === right + 1 || i === left - 1) list.push(ellipsis)

        if (i <= right && i >= left) list.push(i)
      }
    }

    return list
  }
  shouldComponentUpdate(nextProps) {
    return (
      this.props.totalResults !== nextProps.totalResults ||
      this.props.currentPage !== nextProps.currentPage ||
      this.props.perPage !== nextProps.perPage
    )
  }
  registerRef = input => {
    this.pagination = input
  }
  render() {
    let {
      totalResults,
      perPage,
      currentPage,
      edges,
      limit,
      ellipsis,
    } = this.props

    let currentPageInt = parseInt(currentPage)
    let totalPages = Math.ceil(totalResults / perPage)
    let start = 1
    let left = Math.max(currentPageInt - edges, 0)
    let right = Math.min(currentPageInt + edges, totalPages)
    let pages = this.createPageList(
      start,
      totalPages,
      limit,
      left,
      right,
      ellipsis
    )

    let prevPageClass = classNames('o-page o-page-previous', {
      'o-page-disabled': currentPageInt === 1,
    })

    let nextPageClass = classNames({
      'o-page o-page-next': true,
      'o-page-disabled': currentPageInt === totalPages || !totalPages,
    })

    return (
      <nav className="o-pagination" ref={this.registerRef}>
        <button className={prevPageClass} onClick={this.prevPage}>
          {this.props.labelPagePrev}
        </button>
        {pages.map((page, idx) => {
          return (
            <PageNumber
              selectPage={this.selectPage}
              page={page}
              key={idx}
              isActive={currentPageInt === page}
            />
          )
        })}
        <button className={nextPageClass} onClick={this.nextPage}>
          {this.props.labelPageNext}
        </button>
      </nav>
    )
  }
}

/**
 * Page Number
 */
function PageNumber({ page, isActive, selectPage }) {
  function handleClick() {
    if (!isNaN(page)) selectPage(page)
  }

  let klass = classNames({
    'o-page': true,
    'o-page-current': isActive,
    'o-page-ellipsis': isNaN(page),
  })
  return (
    <button className={klass} onClick={handleClick}>
      {page}
    </button>
  )
}

export { Pagination }
export default Pagination
