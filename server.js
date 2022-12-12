const express = require('express');

const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

// ROUTES

app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App!')
})


const port = 3000;
app.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
})