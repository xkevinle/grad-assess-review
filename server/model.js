//we can put the database access point here
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://xkevinle:Lol123123@cluster0.uvftduh.mongodb.net/?retryWrites=true&w=majority';
// const MONGO_URI = 'mongodb+srv://Luke23:Luke23@cluster0.9cpu5.mongodb.net/?retryWrites=true&w=majority'
//sends a request to connect to the mongo server
mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'chatroom'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model('user', userSchema)

const messageSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  timeStamp: {
    type: Date,   //string?? depending on date format
    required: true
  }
})

//use the mongoose method to make our schemas into models
const Message = mongoose.model('message', messageSchema)

//export our models
module.exports = { Message, User }