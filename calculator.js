const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.post('/', (req, res) => {

    let first = Number(req.body.num1);
    let second = Number(req.body.num2);
    let result = first + second; 


    res.send("The result is " + result);
} )

app.get('/bmicalculator', (req,res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmiCalculator', (req, res) => {
    let num1 = parseFloat(req.body.weight);
    let num2 = parseFloat(req.body.height);

    let result = num1 / (num2*num2);

    res.send("the result is " + result);
})

app.listen(3000, () => {
    console.log("server is running");
} )