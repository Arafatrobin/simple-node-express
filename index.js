const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('hello i am excited to learn node server');
});

const users = [
    { id: 0, name: 'saful', email: 's@gmail.com' },
    { id: 1, name: 'safu', email: 's@gmail.com' },
    { id: 2, name: 'rafi', email: 's@gmail.com' },
    { id: 3, name: 'kafil', email: 's@gmail.com' },
    { id: 4, name: 'sraafi', email: 's@gmail.com' }
]


app.get('/users', (req, res) => {
    const search = req.query.search;
    // use querry parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'apple']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yammy food');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})