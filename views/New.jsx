import React from 'react'

class New extends React.Component{
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
                <h1>Add a Pokemon</h1>
                <form method='POST' action='/pokemon'>
                    <input name='name'></input>
                    <input type="submit" value="Add Pokemon" />
                </form>
            </body>
            </html>
        )
    }
}

export default New