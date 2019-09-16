import { useState, useEffect, useRef } from "react"

export default function useScrollTop(target = window && window.document) {
  const [value, set] = useState(0)

  useEffect(() => {
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
