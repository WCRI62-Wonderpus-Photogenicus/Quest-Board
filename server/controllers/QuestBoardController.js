const db = require('../models/QuestBoardModels');

const questBoardController = {}

questBoardController.getTasks = async (req,res,next) => {
    const {projectsId} = req.body
    console.log("in getTasks:", req.body.projectsId)
    try {
      const params = [projectsId] 
      const projectQuery = `SELECT * FROM tasks WHERE projects_id = $1` 
      const result = await db.query(projectQuery, params)
      console.log(result.rows)
      res.locals.taskList =  result.rows
      return next()
    } catch (err) {
      return next({
        log: `userController.getProjects: ERROR: ${err}`,
        message: { err: 'Error occured in userController.getProjects.' },
        status: 500,
      });
    }
  }

  questBoardController.newTask = async (req,res,next) => {
    const {projectsId, desc, name} = req.body
    console.log(req.body)
    try {
      const params = [projectsId, desc, name] 
      const projectQuery = `INSERT INTO tasks (projects_id, "desc", name) VALUES ($1, $2, $3)`  
      const result = await db.query(projectQuery, params)
      res.locals.newTask = result.rows[0]
      return next()
    } catch (err) {
      return next({
        log: `userController.newTask: ERROR: ${err}`,
        message: { err: 'Error occured in userController.newTask.' },
        status: 500,
      });
    }
  }

  questBoardController.deleteTask = async (req,res,next) => {
    const {tasksId} = req.body
    console.log(req.body)
    try {
      const params = [tasksId] 
      const projectQuery = `DELETE FROM tasks WHERE tasks_id = $1`;
      const result = await db.query(projectQuery, params)
      res.locals.deleteTask = result.rows[0]
      return next()
    } catch (err) {
      return next({
        log: `userController.deleteTask: ERROR: ${err}`,
        message: { err: 'Error occured in userController.deleteTask.' },
        status: 500,
      });
    }
  }

  questBoardController.updateTask = async (req,res,next) => {
    const { tasksId, desc, name } = req.body;
    console.log("body", req.body)
    try {
      const params = [desc, name, tasksId];
      console.log('params', params)
      const projectQuery = `UPDATE tasks SET "desc" = $1, name = $2 WHERE tasks_id = $3`;
      const result = await db.query(projectQuery, params)
      console.log('result', result)
      return next()
    } catch (err) {
      return next({
        log: `userController.updateTask: ERROR: ${err}`,
        message: { err: 'Error occured in userController.updateTask.' },
        status: 500,
      });
    }
  }


  module.exports = questBoardController