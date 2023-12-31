const express = require('express');
const apiRouter = require('./routes/api');

const session = require('express-session')
const pool = require('./models/QuestBoardModels')
const PostgresSession = require('connect-pg-simple')(session)

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
  store: new PostgresSession({
      pool: pool,
      tableName: 'sessions'
  }), 
  secret: 'secret',
  cookie: { maxAge: 1000},
  saveUninitialized: true, //this will create a new session id 
}))

// set up routing to routes here
app.use('/', apiRouter);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {console.log("Listening on Port: 3000")});