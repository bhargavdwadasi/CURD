const express = require('express');
const app = express();
const PORT = 5000
const mongoose = require('mongoose')
const BooksRoute = require('./routes/books')
const cors = require('cors')
mongoose.connect('mongodb+srv://bhargav:Shiridi@123@curddb.sapdh.mongodb.net/CURDdb?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true })
let db = mongoose.connection;
db.once('open',()=>{
    console.log('Connected to mongodb');
})

app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))
app.use(cors())
app.use('/',BooksRoute);
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})