import React, { useState } from 'react'

const Anime = () => {
  const [loading,isLoading] =  useState(true)
  if(loading){
    setTimeout(() => {
      isLoading(false)
    }, 1000);
    return (
      <h1>Tunggu Sebentar</h1>
    )
  }
  return (
    <h1>Anime</h1>
  )
}

export default Anime