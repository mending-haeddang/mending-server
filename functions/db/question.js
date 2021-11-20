const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getQuestion = async (client, teamID) => {
    const { rows } = await client.query(
      `
      SELECT * FROM question q
      WHERE id = $1
      `,
      [teamID],
    );
    return convertSnakeToCamel.keysToCamel(rows);
  };

const getAllQuestions = async (client) => {
    const { rows } = await client.query(
        `
        SELECT * FROM question q
        `
    );
    return convertSnakeToCamel.keysToCamel(rows);
}

module.exports = { getQuestion, getAllQuestions };
