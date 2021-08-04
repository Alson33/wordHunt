import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import './Header.css'
import categories from '../../data/category'

const Header = ({ setCategory, category, word, setWord }) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            type: "dark",
        }
    })

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
                        onChange={e => setCategory(e.target.value)}
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
