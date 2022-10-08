const express = require('express');
const app = express();
app.use(express.json());
var mongoose = require('mongoose');

const dbURI =
  'mongodb+srv://admin:admin@cluster0.lwhswfn.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { dbName: 'CourseDB' });

require('./models/coursesSchema');

// CONNECTION EVENTS
mongoose.connection.on('connected', function () {
  console.log('Connected to database successfully!');
});
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});

const apiRouter = require('./routes/index');
app.use('/api', (req, res, next) => {
  // console.log(req, 'req');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,PATCH');
  next();
});
app.use('/api', apiRouter);
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log('Server started'));
