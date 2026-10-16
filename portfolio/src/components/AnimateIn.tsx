"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "none"
}

export default function AnimateIn({ children, className, delay = 0, direction = "up" }: AnimateInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const directionMap = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
    none: { y: 0, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
