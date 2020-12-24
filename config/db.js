const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb+srv://kajol:123456Ab@cluster0.qdk9q.mongodb.net/discoversylhet?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error: '))

db.once('open', ()=>{
    console.log("Database Connected");
    
})






