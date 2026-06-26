// ── CONTEXT TRANSFER HOOK ──
// Tracks active bento index and transfers it to accordion on resize

'use client'
import { useState, useCallback } from 'react'

export function useBentoAccordion(total: number) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // Called on bento hover/click — sets active
  const setActive = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  // Called on bento mouse leave
  const clearActive = useCallback(() => {
    setActiveIndex(null)
  }, [])

  // Accordion toggle — if same index clicked, close it
  const toggleAccordion = useCallback((index: number) => {
    setActiveIndex(prev => (prev === index ? null : index))
  }, [])

  return { activeIndex, setActive, clearActive, toggleAccordion }
}
