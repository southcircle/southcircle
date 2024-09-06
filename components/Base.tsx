import React from 'react'

const Base = () => {
    const year = new Date().getFullYear();
  return (
    <div className="container flex items-start pt-28 pb-4 bg-transparent w-full">&copy; Vimerge Studio ${year}. All rights reserved.</div>
  )
}

export default Base