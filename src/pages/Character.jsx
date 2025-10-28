import {React , useState} from 'react'
import Loading
 from '../Loading';
const Character = () => {
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
    <h1>Character</h1>
  )
}

export default Character