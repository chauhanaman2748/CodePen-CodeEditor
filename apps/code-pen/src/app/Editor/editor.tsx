import {Typography, Box} from '@mui/material'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import {Controlled as ControlledEditor} from 'react-codemirror2'
import { useCallback } from 'react'
import { makeStyles } from '@mui/styles'

interface EdiorPropsInterface {
    displayName: string,
    language: string,
    value: string,
    onChange: (value: string)=> void
}

const useStyles = makeStyles((theme) => ({
    typography: {
        flexGrow: 1,
        flexBasis: 0,
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
    },
    box: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'hsl(255, 6%, 10%)',
        color: 'white',
        padding: '5px 5px 5px 10px',
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
    },
    editorWrapper: {
        flexGrow: 1,
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
        overflow: 'hidden',
    },
  }))

export function Editor(EditorProps: EdiorPropsInterface) {
    const {
        displayName,
        language,
        value,
        onChange
    } = EditorProps

    const {typography, box, editorWrapper} = useStyles()

    const handleChange = useCallback((editor, data, value: string) => {
        onChange(value)
    }, [onChange])

  return (
    <Typography className={typography}>
        <Box className={box}>
            {displayName}
            <button>O/C</button>
        </Box>
        <ControlledEditor
            className={editorWrapper}
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
    </Typography>
  )
}

export default Editor