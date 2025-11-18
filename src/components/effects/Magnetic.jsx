import { useEffect, useRef } from 'react'

export default function Magnetic({ children, strength = 18, as: Tag = 'span', className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)
      el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`
    }
    const onLeave = () => { el.style.transform = 'translate(0,0)' }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])
  return <Tag ref={ref} className={`inline-block magnetic ${className}`}>{children}</Tag>
}
