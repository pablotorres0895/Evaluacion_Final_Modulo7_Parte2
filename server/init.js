function createUser(user){
    user.save(function(error) {
        if (error) {
            console.log(error)
        }
        console.log("OK")
    })
}
const Users = require('./model/user.js'),
        mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodedb')

let user1 = new Users({
    userId: 'user1',
    password: '12345',
    name: 'Jose Pablo',
    birthday: new Date(),
});
let user2 = new Users({
    userId: 'user2',
    password: '12345',
    name: 'Pablo torres',
    birthday: new Date(),
});
let user3 = new Users({
    userId: 'user3',
    password: '12345',
    name: 'Pablo torres',
    birthday: new Date(),
});

createUser(user1);
createUser(user2);
createUser(user3);