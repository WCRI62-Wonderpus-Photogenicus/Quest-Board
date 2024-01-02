const db = require('../models/QuestBoardModels');

const userController = {};

userController.addProject = async (req, res, next) => {
  let projectsId  = req.body.projectsId;
  console.log(req.body)
  
    // Ensure projects_id is provided and valid
    if (!projectsId) {
        const params = [req.body.projectName]
        const createProjectQuery = 'INSERT INTO projects (project_name) VALUES ($1) RETURNING *;'
        const newProject = await db.query(createProjectQuery, params)
        projectsId = newProject.rows[0].projects_id
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
        req.body.projectsId = projectsId
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
  console.log(req.body)
  try {
    const params = (req.body.projectsId) ? [username, password, projectsId] : [username, password];

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
      const params = [username, password];
        // Use a SELECT query to check if the user info exists
        const projectQuery = `SELECT * FROM accounts WHERE username = $1 AND password = $2`;
        const result = await db.query(projectQuery, params);

        // if no matching user found
        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        // console.log(result.rows[0])

        res.locals = {userId: result.rows[0].user_id, projectsId: result.rows[0].projects_id}
        return next();
    } catch (err) {
        return next({
            log: `userController.login: ERROR: ${err}`,
            message: { err: 'Error occured in userController.login.' },
            status: 500,
          });
    }
}


module.exports = userController