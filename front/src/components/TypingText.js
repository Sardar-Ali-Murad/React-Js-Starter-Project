import React from 'react'
import { textVariant } from "../utils/frameMotion"
import { motion } from 'framer-motion';

const TypingText = ({text,size}) => {
  return (
    <p style={{fontSize:size}} className="label">
      {
        text.split("").map((word,index)=><motion.span key={index} variants={ textVariant(index*.3) } initial="hidden" whileInView="show" >{word}</motion.span>)
      }
    </p>
  )
}

export default TypingText
