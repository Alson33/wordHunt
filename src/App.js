import axios from 'axios';
import './App.css';
import { useEffect, useState, useCallback } from 'react'
import { Container, withStyles, Switch } from '@material-ui/core';
import Header from './components/header/Header';
import Definations from './components/Definations/Definations';
import { grey } from '@material-ui/core/colors';

function App() {
  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState("en")
  const [darkMode, setDarkMode] = useState(true)

  const fetchApi = useCallback(
    async () => {
      try{
        const data = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
        )
  
        setMeanings(data.data)
      }catch(error){
        console.log(error);
      }
    },
    [category, word],
  )

  const ThemeSwitcher = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  useEffect(() => {
    fetchApi()
  }, [word, category, fetchApi])

  return (
    <div className="App" style={{ height:'100vh', backgroundColor:darkMode ? '#282c34' : '#e2e2e2', color:darkMode ? '#fff' : "#000", transition: "all 0.5s linear" }}>
      <Container maxWidth="md" style={{ display:'flex', flexDirection:'column', height:'100vh', justifyContent:"space-evenly" }}>
        <div style={{ position:"absolute", top: 0, right: 15, paddingTop: 10 }}>
          <span>{darkMode ? "Dark" : "Light"} mode</span>
          <ThemeSwitcher 
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}></ThemeSwitcher>
        </div>
        <Header 
          category={category} 
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          darkMode={darkMode}
        />
        <Definations word={word} category={category} meanings={meanings} darkMode={darkMode} />
      </Container>
    </div>
  );
}

export default App;
