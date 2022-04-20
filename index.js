const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
    res.send('Look Mama! how are you I can Node now!!!')
});

const users = [
    {id:1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01712358967'},
    {id:2, name: 'Sabnur', email: 'sabnur@gmail.com', phone: '01712358967'},
    {id:3, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '01712358967'},
    {id:4, name: 'Sabila', email: 'sabila@gmail.com', phone: '01712358967'},
    {id:5, name: 'Sohana', email: 'sohana@gmail.com', phone: '01712358967'},
    {id:6, name: 'Sohana', email: 'sohana@gmail.com', phone: '01712358967'},
    {id:7, name: 'Sohana', email: 'sohana@gmail.com', phone: '01712358967'},
]

app.get('/users',(req, res) =>{
    // filter by search query parameter
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);

    }
    // console.log('query', req.query);
    else{
        res.send(users);
    }
    
});

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) =>{
    console.log ('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () =>{
    console.log('Listening to port', port);
})
