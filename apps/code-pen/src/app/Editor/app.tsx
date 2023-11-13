import {Box} from '@mui/material'
import Editor from "./editor"
import { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: 'hsl(255, 6%, 25%)',
    display: 'flex',
    height: '50vh'
  },
}))

export function App() {
  const [valHTML, setValHTML] = useState<string>('')
  const [valCss, setValCss] = useState<string>('')
  const [valJs, setValJs] = useState<string>('')
  const [srcDoc, setSrcDoc] = useState<string>('')
  const {box} = useStyles()
  
  useEffect(()=>{
    const timeout = setTimeout(() => {
        setSrcDoc(`
          <html>
            <body>${valHTML}</body>
            <style>${valCss}</style>
            <script>${valJs}</script>
          </html>  
        `)
    }, 250)
    return () => clearTimeout(timeout)
  },[valHTML, valCss, valJs])

  return (
    <>
      <Box className={box}>
        <Editor 
          displayName= "HTML"
          language= "xml"
          value= {valHTML}
          onChange ={setValHTML}
        />
        <Editor 
          displayName= "CSS"
          language= "css"
          value= {valCss}
          onChange ={setValCss}
        />
        <Editor 
          displayName= "JS"
          language= "javascript"
          value= {valJs}
          onChange ={setValJs}
        />
      </Box>
      <iframe
        srcDoc={srcDoc}
        title='output'
        sandbox='allow-scripts'
        width="100%"
        height="400vh"
      />
    </>
  )
}

export default App
