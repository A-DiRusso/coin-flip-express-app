//js
const express = require('express');
const app = express();

const PORT = 3000;

function flipCoin (req, res, next) {
    let randomNumber = (parseInt(Math.random() * 2));
    if (randomNumber === 0) {
        res.redirect('/tails');
    } else if (randomNumber === 1) {
        res.redirect('/heads');
    } else {
        res.redirect('/funnycoin');
    }
}
function heads(req, res) {
    res.send('HEADS');
}
function tails(req, res) {
    res.send('TAILS');
}
function funnycoin(req, res) {
    res.send('it does not appear that you have a fair coin.');
}
app.get('/', flipCoin);
app.get('/heads', heads);
app.get('/tails', tails);
app.get('/funnycoin', funnycoin);

app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`);
});