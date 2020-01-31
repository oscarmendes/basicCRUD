let express = require('express');
let app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/users/2', (req, resp) => {
    resp.send({id:2, login:'Nancy', age: 20});
})

app.post('/users', (req, resp) =>{
    console.log(req.body);
    resp.send('created');
})

app.listen(3000, () => console.log('Listening 3000...'));