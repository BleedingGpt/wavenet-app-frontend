'use client'
import React from 'react'
import { AnimatePresence, motion as m} from 'framer-motion';
export default function Inner({ children }){
    const anim = (variants) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants
        }
    }

    const opacity = {
        initial: {
            opacity: 0,
            x: -100
        },
        enter: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.75
            }
        },
        exit: {
            opacity: 0,
            y: -100, // Adjusted y value for exit animation
            transition: {
                duration: 0.75,
                ease: "easeOut"
            }
        }
    }

  return (
    <AnimatePresence >
    <m.div {...anim(opacity)} className='page'>
        {children}
    </m.div>
    </AnimatePresence>
  )
}