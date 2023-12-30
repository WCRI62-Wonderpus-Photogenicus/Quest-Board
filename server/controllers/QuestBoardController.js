const db = require('../models/QuestBoardModels');

const questBoardController = {};

// questBoardController.addUser = async (req, res, next) => {
//   const { username, password, projectid } = req.body;
//   try {
//     const params = [username, password, projectid];
//     const text = `INSERT INTO accounts (username, password) VALUES ($1,$2, $3) RETURNING *`;

//     const result = await db.query(text, params);
//     res.locals.character = result.rows[0];
//     return next();
//   } catch (err) {
//     return next({
//       log: `QuestBoardController.addUser: ERROR: ${err}`,
//       message: { err: 'Error occured in QuestBoardController.addUser.' },
//       status: 500,
//     });
//   }
// };

questBoardController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const params = [username, password];
    const text = `SELECT * FROM kevintestaccounts WHERE username = $1 AND password = $2`;
    const result = await db.query(text, params);
    console.log(result);
    if (result.rows[0]) {
      res.locals.isverified = true;
    } else {
      res.locals.isverified = false;
    }
    // res.locals.character = result.rows[0];
    return next();
  } catch (err) {
    return next({
      log: `QuestBoardController.addUser: ERROR: ${err}`,
      message: { err: 'Error occured in QuestBoardController.addUser.' },
      status: 500,
    });
  }
};

module.exports = questBoardController;
