const express = require('express');
const router = express.Router();

// Add headers
router.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4201');

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
router.get('/users', function (req, res) {
    data = [{ name: 'krishna', comp: 'HCL', designation: 'Lead' },
    { name: 'ashish', comp: 'self', designation: 'Lead' }]

    res.send(data);
});

router.get('/', function (req, res) {
    //data=[{name:'krishna', comp:'HCL', designation:'Lead'},
    // {name:'ashish', comp:'self', designation:'Lead'}]
    profile = {
        name: 'Krishna Kumar Yadav',
        company: 'HCL Technology',
        location: 'Noida',
        designation: 'Technology Lead',
        manager: 'Rajnish Mahajan'

    }
    res.send(profile);
});


module.exports = router;