import React from "react"

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
                <link rel="stylesheet" href="./style.css" />
            </head>
            <body>
            <h1>Pokemon!</h1>
                <p style={{textAlign:'center'}}>
                    <a href="/pokemon/new">Create New Pokemon</a>
                </p>
                <ul>
                    {pokemon.map((element) => {
                        return (
                            <li>
                                <a href={`/pokemon/${element.id}`}>{capitalize(element.name)}</a>
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