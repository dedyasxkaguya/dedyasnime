import React, { useState } from 'react'
import Loading from '../Loading.jsx'
const Anime = () => {
  const [load, isLoad] = useState(true)
  if (load) {
    setTimeout(() => {
      isLoad(false)
    }, 500);
    return (
      <Loading />
    )
  }
  return (
    <div className="p-2">
      <h1>Anime</h1>
    </div>
  )
}

export default Anime