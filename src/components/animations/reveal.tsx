"use client"

import { motion, type MotionProps } from "framer-motion"

import { cn } from "@/lib/utils"

interface RevealProps extends React.ComponentProps<typeof motion.div> {
  delay?: number
  y?: number
}

export function Reveal({
  delay = 0,
  y = 18,
  className,
  children,
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.36, ease: [0.2, 0, 0, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps extends React.ComponentProps<typeof motion.div> {
  stagger?: number
}

export function Stagger({
  stagger = 0.08,
  className,
  children,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const STAGGER_ITEM: MotionProps["variants"] = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.2, 0, 0, 1] },
  },
}
