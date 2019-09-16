import React, { useState, useEffect, useRef } from "react"
// import { animated, useSpring } from "react-spring"

import useScrollTop from "../hooks/useScrollTop"

const Header = ({ className, children }) => {
  const ref = useRef()
  const [isMounted, setMounted] = useState(false)

  const scrollTop = useScrollTop()
  const isSticky = ref.current ? scrollTop > ref.current.clientHeight : false

  useEffect(() => {
    setMounted(true)
    return () => {
      setMounted(false)
    }
  }, [])

  // <div className="shadow">
  //   <div className="mx-auto container">
  //   </div>
  // </div>

  return (
    <div
      ref={ref}
      className={`fixed left-0 right-0 top-0 z-40 shadow bg-white ${className}`}
    >
      <div className="mx-auto container">{children}</div>
    </div>
  )
}

export default Header
