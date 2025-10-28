import {React , useState} from 'react'
import Loading from '../Loading.jsx'

const Manga = () => {
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
    <h1>Manga</h1>
  )
}

export default Manga