import React from "react"

const capitalize = (word) => {
    return `${word[0].toUpperCase()}${word.slice(1)}`
}

class Show extends React.Component{
    render(){
        const { p } = this.props;
        const { name, img} = p;
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
            <h1>Gotta Catch em All!</h1>
                <h2>{capitalize(name)}</h2>
                <img src={`${img}.jpg`} alt={`${name}`}></img>
                <a href="/pokemon">Back</a>
            </body>
            </html>
        )
    }
}

export default Show