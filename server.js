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

app.get('/pokemon/:id', (req, res) => {
    res.send(req.params.id);
})


const port = 3000;
app.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
})