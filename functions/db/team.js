const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

// teamCheckGET
const getUserByChecking = async (client, teamID, ) => {
    const { rows } = await client.query(
      `
      SELECT * FROM team t
      WHERE id = $1
        AND question_content = $2
      `,
      [teamID],
    );
    return convertSnakeToCamel.keysToCamel(rows[0]);
  };

  // teamInfoPOST  
  const addTeam = async (client, memberCount, teamCode) => {
    const { rows } = await client.query(
      `
      INSERT INTO team
      (member_count, code)
      VALUES
      ($1, $2)
      RETURNING *
      `,
      [ memberCount, teamCode],
    );
    return convertSnakeToCamel.keysToCamel(rows[0]);
  };

  // teamInfoPOST
 const userInfo = async (client, userID) => {
    const { rows } = await client.query(
      `
      SELECT * FROM team t
      WHERE id = $1
      `,
      [userID],
    );
    return convertSnakeToCamel.keysToCamel(rows[0]);
  };


const getAllQuestions = async (client) => {
    const { rows } = await client.query(
        `
        SELECT * FROM question q
        `
    );
    return convertSnakeToCamel.keysToCamel(rows);
}

const getTeamIdByTeamCode = async(client, teamCode) => {
    const { rows } = await client.query(
        `
        SELECT * FROM team
        WHERE code = $1
        `,
    
    [teamCode]
    )
    return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getAllQuestions, getTeamIdByTeamCode, getUserByChecking, addTeam, userInfo };