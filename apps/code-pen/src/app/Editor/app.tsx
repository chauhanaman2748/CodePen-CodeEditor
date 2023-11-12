import {Box, Paper} from '@mui/material'
import Editor from "./editor"
import { useState } from 'react'

export function App() {
  const [valHTML, setValHTML] = useState<string>('')
  const [valCss, setValCss] = useState<string>('')
  const [valJs, setValJs] = useState<string>('')

  return (
    <>
    <Box>
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
    <Paper>
      <iframe
        title='output'
        sandbox='allow-scripts'
        width="100%"
        height="100%"
      />
    </Paper>
    </>
  )
}

export default App
