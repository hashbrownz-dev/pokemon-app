const express = require('express');
const pokemon = require('./models/pokemon')

const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

// ROUTES

app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req,res) => {
    res.render('Index',{pokemon});
})


const port = 3000;
app.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
})