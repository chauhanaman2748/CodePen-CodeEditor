import {Container, Box} from '@mui/material'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import {Controlled as ControlledEditor} from 'react-codemirror2'
import { useCallback } from 'react'

interface EdiorPropsInterface {
    displayName: string,
    language: string,
    value: string,
    onChange: (value: string)=> void
}

export function Editor(EditorProps: EdiorPropsInterface) {
    const {
        displayName,
        language,
        value,
        onChange
    } = EditorProps

    const handleChange = useCallback((value: string)=>{
        onChange(value)
    }, [onChange])

  return (
    <Container>
        <Box>
            {displayName}
            <button>O/C</button>
        </Box>
        <ControlledEditor
            onBeforeChange={handleChange}
            value={value}
            options={{
                lineWrapping: true,
                lint: true,
                theme: 'material',
                lineNumbers: true,
                mode: language
            }}
        />
    </Container>
  )
}

export default Editor