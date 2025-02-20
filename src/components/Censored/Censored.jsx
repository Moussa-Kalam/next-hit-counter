'use client'
import React, { useState } from 'react'

function Censored({children}) {
  const [isCensored, setIsCensored] = useState(false)
  return <button className={isCensored ? 'censored': ""} onClick={() => setIsCensored(!isCensored)}>
    {children}
  </button>
}

export default Censored;
