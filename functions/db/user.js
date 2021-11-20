const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAllUsers = async (client) => {
    const { rows } = await client.query(
        `
        SELECT * FROM "user" u
        `
    );
    return convertSnakeToCamel.keysToCamel(rows);
}

const addUser = async (client, userName, teamId) => {
    const {rows} = await client.query(
        `
        INSERT INTO "user" (name, team_id)
        values ($1, $2)
        retruning *
        `
        [userName, teamId]
    )
    return convertSnakeToCamel.keysToCamel(rows[0])
}

module.exports = { getAllUsers, addUser };