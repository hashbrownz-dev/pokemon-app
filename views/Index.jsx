import React from "react"
import pokemon from "../models/pokemon"

const myStyle = {
    color:'#ffcc00',
    background: '#000000'
}

const capitalize = (word) => {
    return `${word[0].toUpperCase()}${word.slice(1)}`
}

class Index extends React.Component{
    render(){
        const pokemon = this.props.pokemon;
        return (
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Pokemon App</title>
            </head>
            <body>
                <h1 style={myStyle}>Pokemon!</h1>
                <ul>
                    {pokemon.map((element, index) => {
                        return (
                            <li>
                                <a href={`/pokemon/${index}`}>{capitalize(element.name)}</a>
                            </li>
                        )
                    })}
                </ul>
            </body>
            </html>
        )
    }
}

export default Index