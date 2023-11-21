const express = require('express');

const app = express();
const PORT = 4000;

app.listen(PORT);

app.set('view engine', 'ejs');
app.set('views', './views');

var tokens = ["Xej907Nmj8", "WTVx4ZRktk", "jILGrh75Gi", "GaePTJvspg", "FPIP4UwOHP", "OjKVqn7U0H", "0jEeIbKkqa", "Cpfi1zQLCe", "gyD1pgq9pB", "zjwpZZ0Qj8"];

/* SERVER FUNCTIONS {START} */

function randomToken(){
    let random = Math.floor(Math.random()*tokens.length);
    let token = tokens[random];
    return token;
}

function checkToken(token){
    for(const t of tokens){
        if(token == t){
            return true;
        }
    }
}

/* SERVER FUNCTIONS {END} */

app.get('/', (req, res) => {
    let token = randomToken();
    res.redirect(`/main/${token}`);
});

app.get('/main/:token', (req, res) => {
    if(checkToken(req.params.token)){
        res.render('main', {token: req.params.token});
    }else{
        res.status(498).send('Invalid Token');
    }
})