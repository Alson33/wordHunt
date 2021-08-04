import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import './Header.css'
import categories from '../../data/category'

const Header = ({ setCategory, category, word, setWord, darkMode }) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: darkMode ? '#fff' : '#000',
            },
            type: darkMode ? "dark" : "light",
        }
    })

    const handleChange = e => {
        setCategory(e.target.value)
        setWord('')
    }

    return (
        <div className="header">
            <span className="title">{word || "Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        id="standard-basic" 
                        label="Search word" 
                        className="search" 
                        value={word}
                        onChange={e => setWord(e.target.value)}
                    />
                    <TextField 
                        id="standard-select-currency"
                        className="select"
                        select
                        label="Language"
                        value={category}
                        onChange={handleChange}
                        >
                            {
                                categories.map(language => {
                                    return (
                                        <MenuItem key={language.label} value={language.label}>
                                            {language.value}
                                        </MenuItem>
                                    )
                                })
                            }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
