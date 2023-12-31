const db = require('../models/QuestBoardModels');
const bcrypt = require('bcrypt');

const userController = {};

userController.addProject = async (req, res, next) => {
  console.log(req.body)  
  const projectsId  = req.body.projectsId;
  
    // Ensure projects_id is provided and valid
    if (!projectsId) {
        return next();
    }

    try {
        const params = [projectsId];
        // Use a SELECT query to check if the project exists
        const projectQuery = `SELECT * FROM projects WHERE projects_id = $1`;
        const result = await db.query(projectQuery, params);
   
        // Check if a project with the given ID exists
        if (result.rows.length === 0) {
            return res.status(404).send({ error: 'Project not found.' });
        }
  
        return next();
    } catch (err) {
        return next({
            log: `userController.addProject: ERROR: ${err}`,
            message: { err: 'Error occurred in userController.addProject.' },
            status: 500,
        });
    }
  }

userController.register = async (req, res, next) => {

  const { username, password, projectsId } = req.body;

  //hashes input password with a salt factor of 10
  const hashedPW = await bcrypt.hash(password, 10)

  try {
    //passing in username, hashedPW, and optional projectId to be stored in DB
    const params = (req.body.projectsId) ? [username,  hashedPW, projectsId] : [username,  hashedPW];

    // creates a new account. If there is a projectsId, logging in will return the project associated with that id, else it will not.
    const userQuery = (req.body.projectsId) ? `INSERT INTO accounts (username, password, projects_id) VALUES ($1, $2, $3) RETURNING *` : `INSERT INTO accounts (username, password) VALUES ($1, $2) RETURNING *`;
    
    const result = await db.query(userQuery, params);
    res.locals = {userId: result.rows[0].user_id, projectsId: result.rows[0].projects_id}
    
    return next();

  } catch (err) {
    return next({
      log: `userController.register: ERROR: ${err}`,
      message: { err: 'Error occured in userController.register.' },
      status: 500,
    });
  }
};

userController.login = async (req,res,next) => {
    const {username, password} = req.body
    try {
      const params = [username];
        // Use a SELECT query to check if the user info exists
        const projectQuery = `SELECT * FROM accounts WHERE username = $1`;
        const result = await db.query(projectQuery, params);
       
        res.locals = {userId: result.rows[0].user_id, projectsId: result.rows[0].projects_id}

        //checks to see if input password matches hashed password in db
        if (result) {
          const hashedPWCompare= await bcrypt.compare(password, result.rows[0].password)
          if (hashedPWCompare) {
            return next()
          } else {
            return next(res.send("invalid pw"))
          }
        } 

    } catch (err) {
        return next({
            log: `userController.login: ERROR: ${err}`,
            message: { err: 'Error occured in userController.login.' },
            status: 500,
          });
    }
}


module.exports = userController