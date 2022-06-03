const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
    if (req.body.operator === '+') {
        res.send('The result is: ' + (+req.body.num1 + +req.body.num2).toString() + '  <a href=\'/\'>Return</a>');
    } else if (req.body.operator === '-') {
        res.send('The result is: ' + (+req.body.num1 - +req.body.num2).toString() + '  <a href=\'/\'>Return</a>');
    } else if (req.body.operator === '*') {
        res.send('The result is: ' + (+req.body.num1 * +req.body.num2).toString() + '  <a href=\'/\'>Return</a>');
    } else if (req.body.operator === '/') {
        res.send('The result is: ' + (+req.body.num1 / +req.body.num2).toString() + '  <a href=\'/\'>Return</a>');
    } else if (req.body.operator === '%') {
        res.send('The result is: ' + (+req.body.num1 % +req.body.num2).toString() + '  <a href=\'/\'>Return</a>');
    } else {
        res.send('Unespected opertor...' + '  <a href='/'>Return</a>');
    }
});

app.get('/bmi', function(req, res) {
    res.sendFile(__dirname + '/bmi.html');
});

app.post('/bmi', function(req, res) {
    res.send('Your BMI is: ' + (+req.body.num2 / ((+req.body.num1 / 100) * (+req.body.num1 / 100))).toString() + '  <a href=\'/bmi\'>Return</a>');
});

app.listen(3000, function() {
    console.log('Serveur started on port 3000')
});
