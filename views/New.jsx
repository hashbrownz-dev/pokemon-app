import React from 'react'
const styles = require('../public/styles/styles');

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
            <body style={styles.body}>
                <h1 style={styles.h1}>Add a Pokemon</h1>
                <form method='POST' action='/pokemon' style={styles.addForm}>
                    <label htmlFor="name" style={styles.label}>Name:</label>
                    <input name='name' style={styles.inputName}></input>
                    <input type="submit" value="Add Pokemon" style={styles.addBtn} />
                </form>
            </body>
            </html>
        )
    }
}

export default New