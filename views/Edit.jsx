import React from 'react'
import Default from './Default'

class Edit extends React.Component{
    render(){
        const { name, img, _id } = this.props.pokemon
        return (
            <Default>
                <h1>Edit {name}</h1>
                <img src={`${img}.jpg`} alt={`${name}`}></img>
                <form method='POST' action={`/pokemon/${_id}/?_method=PUT`}>
                    <input name='name'></input>
                    <input type="submit" value="Edit Pokemon" />
                </form>
            </Default>
        )
    }
}

export default Edit;