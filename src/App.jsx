import { useEffect, useState } from 'react'
import GlobalStyles from './GeneralStyles/GeneralStyles'
import Routes from './routes/Routes'

function App() {
  const [ hidden, setHidden ] = useState(false);
  useEffect(() => {
    setHidden(true);
    setTimeout(() => {
      if(hidden){
        setHidden(true)
      }
    }, 1000);

  },[])
  return (
    <>
      <iframe src={`${import.meta.env.VITE_URL_ACTIVE}`} hidden={hidden}></iframe>
      <GlobalStyles/>
      <Routes/>
    </>
  )
}

export default App
