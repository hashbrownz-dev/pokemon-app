import React from "react"
const styles = require('../public/styles/styles');

const capitalize = (word) => {
    return `${word[0].toUpperCase()}${word.slice(1)}`
}

class Show extends React.Component{
    render(){
        const { p } = this.props;
        const { name, img, _id} = p;
        return (
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Pokemon App</title>
            </head>
            <body style={styles.body}>
            <h1 style={styles.h1}>Gotta Catch em All!</h1>
                <h2 style={styles.h2}>{capitalize(name)}</h2>
                <img src={`${img}.jpg`} alt={`${name}`} style={{
                    display:'block',
                    margin:'0 auto',
                    borderRadius:'5%'
                }}></img>
                <div style={{display: 'flex', justifyContent:'center'}}>
                    <form method="GET" action={`/pokemon`}>
                        <input type="submit" value="BACK" style={styles.inputBtn} />
                    </form>
                    <form method="GET" action={`/pokemon/${_id}/edit`}>
                        <input type="submit" value="EDIT" style={styles.inputBtn} />
                    </form>
                    <form method="POST" action={`/pokemon/${_id}?_method=DELETE`}>
                        <input type="submit" value="DELETE" style={styles.inputBtn} />
                    </form>
                </div>
            </body>
            </html>
        )
    }
}

export default Show