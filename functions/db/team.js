const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

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


module.exports = { getAllQuestions, getTeamIdByTeamCode };