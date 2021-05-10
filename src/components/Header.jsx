import React from "react"
import classNames from "classnames"

const Header = ({ className, children }) => {
  return (
    <div
      className={classNames(
        `fixed left-0 right-0 top-0 z-50 bg-white shadow ${className}`,
      )}
    >
      <div className="container mx-auto">{children}</div>
    </div>
  )
}

export default Header
