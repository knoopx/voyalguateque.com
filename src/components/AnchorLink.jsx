import React, { useCallback } from "react"

export default ({ href, offset = 120, onClick = () => {}, ...props }) => {
  const handleClick = useCallback(
    (e) => {
      onClick(e)
      const url = new URL(href, window.location.href)
      try {
        const node = document.querySelector(url.hash)
        if (node) {
          e.preventDefault()
          window.scroll({
            top: node.offsetTop - offset,
            behavior: "smooth",
          })
        }
      } catch (e) {
        // ignore
      }
    },
    [href, onClick, offset],
  )
  return <a href={href} {...props} onClick={handleClick} />
}
