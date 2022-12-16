const styles = {
    body:{
        background: '#3b4cca',
        fontFamily: 'Arial, Helvetica, sans-serif'
    },
    h1:{
        textAlign:'center',
        color:'white',
        fontSize: '3em'
    },
    h2:{
        textAlign:'center',
        color:'#ffde00'
    },
    ul:{
        display:'flex',
        flexWrap:'wrap',
        padding:'0',
        justifyContent:'center'
    },
    li:{
        listStyle:'none',
        width:'30%',
        textAlign: 'center',
        margin:'1.5%'
    },
    img:{
        width:'250px',
        height:'250px',
        borderRadius: '50%',
        border: '6px solid #ffde00',
        boxSizing: 'border-box'
    },
    a:{
        color: '#ffde00'
    },
    create:{
        color: '#ffde00',
        fontWeight: 'bold',
        fontSize: '1.5em'
    },
    inputBtn:{
        height:'48px',
        width:'120px',
        borderRadius:'10px',
        margin: '16px',
        fontSize: '1.1em',
        fontStyle: 'italic',
        fontWeight: 'bold',
        background: '#5e71ff',
        color: '#142183',
        border: '3px solid #142183'
    },
    addForm:{
        display: 'block',
        margin: '0 auto',
        width: 'fit-content'
    },
    label:{
        display: 'block',
        color: 'white',
    },
    inputName:{
        display: 'block',
        width: '180px'
    },
    addBtn:{
        width: '100%',
        height:'48px',
        fontSize: '1.1em',
        fontStyle: 'italic',
        fontWeight: 'bold',
        background: '#5e71ff',
        color: '#142183',
        border: '3px solid #142183'
    }
}

module.exports = styles;