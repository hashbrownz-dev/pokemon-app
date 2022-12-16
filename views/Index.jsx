import React from "react"
const styles = require('../public/styles/styles');

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
            <body style={styles.body}>
            <h1 style={styles.h1}>Pokemon!</h1>
                <p style={{textAlign:'center'}}>
                    <a style={styles.create} href="/pokemon/new">Add a Pokemon!</a>
                </p>
                <div style={{maxWidth:'960px', margin:'0 auto'}}>
                    <ul style={styles.ul}>
                        {pokemon.map((element) => {
                            return (
                                <li style={styles.li}>
                                    <img src={`${element.img}.jpg`} style={styles.img}></img>
                                    <a style={styles.a} href={`/pokemon/${element.id}`}>{capitalize(element.name)}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </body>
            </html>
        )
    }
}

export default Index