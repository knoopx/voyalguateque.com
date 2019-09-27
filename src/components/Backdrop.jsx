import React from "react"
import { animated } from "react-spring"

const Backdrop = ({ isOpen, style, className, ...props }) => (
  <animated.div
    className={["fixed inset-0 z-30 bg-black backdrop", className]}
    style={{ ...style, pointerEvents: isOpen ? "" : "none" }}
    {...props}
  />
)

export default Backdrop
