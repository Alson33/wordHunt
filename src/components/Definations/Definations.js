import React from 'react'
import './Definations.css'

const Definations = ({ word, category, meanings, darkMode }) => {
    return (
        <div className="meanings">
            {
                meanings[0] && word && category === 'en' && (
                    <audio 
                        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} 
                        style={{ backgroundColor: "#fff", borderRadius: 10, width:"100%"}}
                        controls>
                        Your Browser doesn't support audio element
                    </audio>
                ) 
            }
            {
                word === "" ? (
                    <span className="subTitle">Start by typing a word in search</span>
                ): (
                    meanings.map(meaning => 
                        meaning.meanings.map(item => 
                            item.definitions.map(def => {
                                return (
                                    <div className="singleMean" style={{ backgroundColor: darkMode ? "#fff" : "#3b5360", color: darkMode ? "#000" : "#fff" }}>
                                        <b>{def.definition}</b>
                                        <hr style={{backgroundColor:"#000", width:"100%"}}/>
                                        {
                                            def.example && (
                                                <span>
                                                    <b>Example : </b> {def.example}
                                                </span>
                                            )
                                        }
                                        {
                                            def.synonyms && (
                                                <span>
                                                    <b>Synonyms : </b>
                                                    {def.synonyms.map(s => `${s}, `)}
                                                </span>
                                            )
                                        }
                                    </div>
                                );
                            })))
                )
            }
        </div>
    )
}

export default Definations
