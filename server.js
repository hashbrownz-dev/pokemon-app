require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const pokemon = require('./models/pokemon')

// MODELS

const Pokemon = require('./models/pokemon')

const MONGO_URI = process.env.MONGO_URI;

mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URI);

mongoose.connection
    .on("open", ()=>console.log('Connect to MongoDB'))
    .on("close", ()=>console.log('Disconnected from Mongo DB'))
    .on("error", (error)=>console.log(error));

const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

app.use(express.urlencoded({extended:true})); // parse urlencoded request bodies
app.use(express.static('public'));

// ROUTES

// SEED DATABASE

app.get('/pokemon/seed', (req, res)=>{
    const starterPokemon = [
        {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
        {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
        {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
        {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
        {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
        {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
        {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
    ];
    Pokemon.deleteMany({}).then((data) => {
        Pokemon.create(starterPokemon).then((data) => {
            res.json(data);
        })
    })
})

// INDEX
app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', async (req,res) => {
    try{
        const pokemon = await Pokemon.find({});
        // res.json(pokemon);
        res.render('Index', {pokemon})
    }catch(error){
        res.json(error)
    }
})

// NEW

app.get('/pokemon/new', (req,res) => {
        res.render('New')
})

// CREATE

app.post('/pokemon', async (req, res) => {
    const { name } = req.body;
    const newPokemon = {
        name,
        img: `http://img.pokemondb.net/artwork/${name}`
    }
    try{
        Pokemon.create(newPokemon, (error, createdPokemon) => {
            if(error) res.json(error);
            console.log(createdPokemon);
            res.redirect('/pokemon');
        })
    }catch(error){
        res.json(error);
    }
})

// SHOW

app.get('/pokemon/:id', async (req, res) => {
    try{
        const p = await Pokemon.findById(req.params.id);
        res.render('Show', { p });
    }catch(error){
        res.json(error);
    }
})

const port = 3000;
app.listen(port, () => {
    console.log(`Now listening on port: ${port}`);
})