const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use('/static', express.static(path.join(__dirname, 'build//static')));

const mongoDB = 'mongodb+srv://admin:admin@cluster0-l9eqk.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true });

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const guitarSchema = new Schema({
    make: String,
    model: String,
    year: String,
    image: String,
    color: String,
    material: String,
    pickups: String
})

const GuitarModel = mongoose.model('guitar', guitarSchema);

app.get('/api/guitars', (req, res) => {

    GuitarModel.find((error, data) => {
        res.json({ guitars: data });
    })
})

app.get('/api/guitars/:id', (req, res) => {
    console.log(req.params.id);

    GuitarModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

app.delete('/api/guitars/:id', (req, res) => {
    console.log(req.params.id);

    GuitarModel.deleteOne({ _id: req.params.id },
        (error, data) => {
            res.json(data);
        })
})

app.put('/api/guitars/:id', (req, res) => {
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    GuitarModel.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (error, data) => {
            res.json(data);
        })
})

app.get('/api/guitars/:id', (req, res) => {
    console.log("GET: " + req.params.id);

    GuitarModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

app.post('/api/guitars', (req, res) => {
    console.log('Post request Successful');
    console.log(req.body.make);
    console.log(req.body.model);
    console.log(req.body.year);
    console.log(req.body.image);
    console.log(req.body.color);
    console.log(req.body.material);
    console.log(req.body.pickups);

    GuitarModel.create({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        image: req.body.image,
        color: req.body.color,
        material: req.body.material,
        pickups: req.body.pickups
    });

    res.json('post recieved!');
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

app.listen(port, () => console.log(`Guitar Database App listening on port ${port}!`))