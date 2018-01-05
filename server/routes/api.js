const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var url1 = "mongodb://localhost:27017/Employeedb";
var url = 'mongodb://localhost:27017/Employeedb';
mongoose.connection.openUri('mongodb://localhost:27017/Userdb');

mongoose.connection.on("open", function () {
    console.log("mongodb is connected!!");
});

// Add headers
router.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});
/*
router.get('/users', function (req, res) {
    data = [{ name: 'krishna', comp: 'HCL', designation: 'Lead' },
    { name: 'ashish', comp: 'self', designation: 'Lead' }];

    mongoose.connect(url1, function (err, db) {
        if (err) throw err;
        var myDb = db.db('Employeedb');
        myDb.collection("users").find({}, { _id: false }).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        })
    });
});

router.get('/', function (req, res) {

    profile = {
        name: 'Krishna Kumar Yadav',
        company: 'HCL Technology',
        location: 'Noida',
        designation: 'Technology Lead',
        manager: 'Rajnish Mahajan'

    }
    res.send(profile);
});

router.get('/usr', function (err, req, res) {
    mongoose.connect(url1, function (err, db) {
        if (err) throw err;
        console.log("Database created!");
        var myDb = db.db('Employeedb');
        myDb.createCollection('users', function (err, collection) {
            console.log('collection created');
            collection.insertOne({ name: 'Krishna', company: 'HCL', location: 'Noida-SEZ' });
            console.log('user Inserted');
            db.close();
        });

    });
})
*/

var userSchema = mongoose.Schema({
    name: String,
    location: String,
    company: String,
    designation: String
});

var User = mongoose.model('Users', userSchema);

router.post('/addUser', function (req, res) {
    console.log(req.body)
    var usr = new User(req.body);
    usr.save().then(item => {
        console.log('Item saved' + item.name);
        res.send({ name: item.name });
    })
});

router.get('/user', function (req, res) {
    // get the user starlord55
    User.find({}, function (err, user) {
        if (err) throw err;
        res.send(user);
    });
});

router.delete('/deleteUser/:id', function (req, res) {
    // get the user starlord55
    console.log(req.params.id);
    User.remove({ _id: req.params.id }, function (err, user) {
        if (err) throw err;
        res.send(user);
    });
});

router.get('/searchUser', function (req, res) {
    // get the user starlord55
    console.log(req);
    User.find({}, function (err, user) {
        if (err) throw err;
        res.send(user);
    });
});

module.exports = router;
