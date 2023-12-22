"use client";
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
     steps: number; 
    }
export default function Progress({ steps}: Props) {

  return (
    <div className='w-[90%] my-2 rounded-full h-[10px] bg-[#282828] border border-[#C0F497]'>
        <motion.div
            className={`${steps === 100 ? 'rounded-full': 'rounded-l-full'}  h-full bg-[#C0F497]`}
            initial={{ width: '0%' }}
            animate={{ width: `${steps}%` }}
        ></motion.div>
    </div>
  )
}
