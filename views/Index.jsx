import React from "react"

const myStyle = {
    color:'#ffcc00',
    background: '#000000'
}

class Index extends React.Component{
    render(){
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
            </body>
            </html>
        )
    }
}

export default Index