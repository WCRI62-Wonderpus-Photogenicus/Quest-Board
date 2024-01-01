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
  //session method creates an OBJECT 
  //session method UNDER THE HOOD: 
    // stores session id to db when a request (login) is made from client
    // uses session_id to be encoded into a cookie (secret prop) and sent to client. Client needs {credentials: "include"} in response header to receive this cookie
    // retrieves session id when a request (login) is made from client and compares it to client's cookie
  store: new PostgresSession({
      pool: pool, //imported db uri
      tableName: 'sessions'
  }), 
  //^this is all being done under the hood of the session method^
  secret: 'thishelpsencodesthecookie',  //encodes the sessionid cookie. Can be any string.
  cookie: {maxAge: 30000}, //sets cookie property
  resave: false, // avoids sessions from being saved into db if session wasn't modified
  saveUninitialized: true // creates a new session on every login request IF its not in the db
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