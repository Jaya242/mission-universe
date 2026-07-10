import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Skip on touch / coarse-pointer devices
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx, ry = my
    let hovering = false
    let pressed = false
    let raf

    document.body.classList.add('has-custom-cursor')

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%) scale(${pressed ? 0.6 : 1})`
    }
    const onOver = (e) => {
      hovering = !!(e.target.closest('a, button, [role="button"], input, textarea, label, [data-hover]'))
    }
    const onDown = () => {
      pressed = true
      dot.style.transform = dot.style.transform.replace(/scale\([^)]+\)/, 'scale(0.6)')
    }
    const onUp = () => {
      pressed = false
      dot.style.transform = dot.style.transform.replace(/scale\([^)]+\)/, 'scale(1)')
    }

    const tick = () => {
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      const size = hovering ? 52 : 30
      const bColor = hovering ? '#38BDF8' : 'rgba(148,197,255,0.55)'
      const op = hovering ? 1 : 0.85
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      ring.style.width = size + 'px'
      ring.style.height = size + 'px'
      ring.style.borderColor = bColor
      ring.style.opacity = op
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    window.addEventListener('mousedown', onDown, { passive: true })
    window.addEventListener('mouseup', onUp, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="ptr-ring" />
      <div ref={dotRef} className="ptr-dot" />
    </>
  )
}
