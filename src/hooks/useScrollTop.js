import { useState, useEffect, useRef } from "react"

export default function useScrollTop() {
  const [value, set] = useState(0)

  useEffect(() => {
    const target = window.document

    set(target.scrollingElement.scrollTop)

    const onScroll = (e) => {
      set(e.target.scrollingElement.scrollTop)
    }

    target.addEventListener("scroll", onScroll)
    return () => {
      target.removeEventListener("scroll", onScroll)
    }
  }, [])

  return value
}
