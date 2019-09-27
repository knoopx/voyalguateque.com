import React from "react"
import PropTypes from "prop-types"
import { MdClose } from "react-icons/md"
import { animated, useSpring } from "react-spring"

import Backdrop from "./Backdrop"

const Drawer = ({
  children,
  isOpen,
  onClose,
  position,
  className,
  ...props
}) => {
  const backdropSpring = useSpring({ opacity: isOpen ? 0.5 : 0 })
  const translateX = isOpen ? 0 : 100
  const drawerSpring = useSpring({
    transform: `translateX(${position === "left" ? -translateX : translateX}%)`,
  })

  return (
    <>
      <Backdrop onClick={onClose} isOpen={isOpen} style={backdropSpring}>
        <a
          className="cursor-pointer absolute right-0 top-0 flex flex-col items-center m-8 text-white close"
          onClick={onClose}
        >
          <MdClose size={38} />
          <div className="mt-2 text-lg font-bold">ESC</div>
        </a>
      </Backdrop>
      <animated.div
        className={[
          "fixed z-40 h-full w-screen sm:w-drawer",
          {
            "left-0": position === "left",
            "right-0": position === "right",
          },
          className,
        ]}
        style={drawerSpring}
        {...props}
      >
        {children}
      </animated.div>
    </>
  )
}

Drawer.defaultProps = {
  isOpen: false,
  position: "left",
  onClose: () => {},
}

Drawer.propTypes = {
  position: PropTypes.oneOf(["left", "right"]),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}

export default Drawer
