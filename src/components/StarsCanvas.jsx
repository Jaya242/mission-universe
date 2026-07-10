import { useEffect, useRef } from 'react'

const orbits = [
  { rx: 0.42, ry: 0.15, tilt: -18, speed: 0.00012, phase: 0,   size: 3,   color: [96,165,250],  glow: 18 },
  { rx: 0.58, ry: 0.20, tilt:  14, speed: 0.00008, phase: 2.1, size: 3.5, color: [129,140,248], glow: 20 },
  { rx: 0.75, ry: 0.26, tilt: -26, speed: 0.00005, phase: 4.2, size: 2.5, color: [165,180,252], glow: 14 },
  { rx: 0.92, ry: 0.33, tilt:  22, speed: 0.00003, phase: 1.0, size: 4,   color: [99,102,241],  glow: 22 }
]

export default function StarsCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let stars = []
    let shooting = []
    let raf
    let W = 0, H = 0, cx = 0, cy = 0

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      cx = W * 0.5; cy = H * 0.5
    }

    const initStars = () => {
      stars = []
      const count = Math.floor((W * H) / 8000)
      for (let i = 0; i < count; i++) {
        const kind = Math.random()
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: kind > 0.98 ? Math.random() * 1.6 + 1 : Math.random() * 0.9 + 0.2,
          a: kind > 0.98 ? 0.7 : Math.random() * 0.35 + 0.12,
          tw: Math.random() * 0.008 + 0.002,
          phase: Math.random() * Math.PI * 2,
          bright: kind > 0.98
        })
      }
    }

    const drawStar = (s, t) => {
      const flicker = 1 + Math.sin(t * s.tw + s.phase) * 0.15
      ctx.globalAlpha = Math.min(1, s.a * flicker)
      ctx.fillStyle = s.bright ? '#e6f2ff' : '#cbd5e1'
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fill()
      if (s.bright) {
        const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 8)
        g.addColorStop(0, 'rgba(230,242,255,0.35)')
        g.addColorStop(1, 'rgba(230,242,255,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(s.x, s.y, 8, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const drawConstellationLines = () => {
      const THRESH = Math.min(W, H) * 0.11
      const T2 = THRESH * THRESH
      ctx.lineWidth = 1
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i]
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < T2) {
            const alpha = (1 - d2 / T2) * 0.08
            ctx.strokeStyle = `rgba(120,160,220,${alpha})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
    }

    const drawOrbit = (o, t) => {
      const rx = W * o.rx
      const ry = H * o.ry
      const angle = t * o.speed + o.phase
      const cos = Math.cos(o.tilt * Math.PI/180)
      const sin = Math.sin(o.tilt * Math.PI/180)
      const px = Math.cos(angle) * rx
      const py = Math.sin(angle) * ry
      const x = cx + px * cos - py * sin
      const y = cy + px * sin + py * cos

      // Orbit ring
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(o.tilt * Math.PI/180)
      ctx.strokeStyle = `rgba(${o.color[0]},${o.color[1]},${o.color[2]},0.055)`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()

      // Glow
      const grad = ctx.createRadialGradient(x, y, 0, x, y, o.glow)
      grad.addColorStop(0, `rgba(${o.color[0]},${o.color[1]},${o.color[2]},0.55)`)
      grad.addColorStop(1, `rgba(${o.color[0]},${o.color[1]},${o.color[2]},0)`)
      ctx.globalAlpha = 1
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(x, y, o.glow, 0, Math.PI * 2)
      ctx.fill()

      // Body
      ctx.fillStyle = `rgb(${o.color[0]},${o.color[1]},${o.color[2]})`
      ctx.beginPath()
      ctx.arc(x, y, o.size, 0, Math.PI * 2)
      ctx.fill()
    }

    const spawnShooting = () => {
      const startX = Math.random() * W * 0.7
      const startY = Math.random() * H * 0.4
      shooting.push({
        x: startX, y: startY,
        vx: 5 + Math.random() * 3,
        vy: 2 + Math.random() * 1.5,
        life: 0,
        maxLife: 60 + Math.random() * 30,
        len: 60 + Math.random() * 60
      })
    }

    const drawShooting = () => {
      for (let i = shooting.length - 1; i >= 0; i--) {
        const s = shooting[i]
        s.life++
        if (s.life >= s.maxLife) { shooting.splice(i, 1); continue }
        const t = s.life / s.maxLife
        const alpha = t < 0.15 ? t / 0.15 : (1 - t) * 1.1
        const x = s.x + s.vx * s.life
        const y = s.y + s.vy * s.life
        const g = ctx.createLinearGradient(x - s.vx * 12, y - s.vy * 12, x, y)
        g.addColorStop(0, 'rgba(140,200,255,0)')
        g.addColorStop(1, `rgba(200,220,255,${Math.max(0, Math.min(1, alpha))})`)
        ctx.strokeStyle = g
        ctx.lineWidth = 1.6
        ctx.beginPath()
        ctx.moveTo(x - s.vx * 12, y - s.vy * 12)
        ctx.lineTo(x, y)
        ctx.stroke()
      }
    }

    let shootTimer = 0
    const draw = (t) => {
      // Base gradient
      const bg = ctx.createLinearGradient(0, 0, 0, H)
      bg.addColorStop(0, '#050813')
      bg.addColorStop(1, '#080b1c')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, W, H)

      // Constellation lines first (behind stars)
      drawConstellationLines()

      // Stars
      for (const s of stars) drawStar(s, t)

      // Shooting stars occasionally
      shootTimer++
      if (shootTimer > 240 && Math.random() < 0.02) {
        spawnShooting()
        shootTimer = 0
      }
      drawShooting()

      // Vignette on top
      const vg = ctx.createRadialGradient(cx, cy, Math.min(W, H) * 0.35, cx, cy, Math.max(W, H) * 0.8)
      vg.addColorStop(0, 'rgba(0,0,0,0)')
      vg.addColorStop(1, 'rgba(0,0,0,0.55)')
      ctx.globalAlpha = 1
      ctx.fillStyle = vg
      ctx.fillRect(0, 0, W, H)

      // Orbits (front layer)
      for (const o of orbits) drawOrbit(o, t)

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    const onResize = () => { resize(); initStars() }
    window.addEventListener('resize', onResize)
    resize()
    initStars()
    raf = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  )
}
