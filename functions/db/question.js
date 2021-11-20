const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAllQuestions = async (client) => {
    const { rows } = await client.query(
        `
        SELECT * FROM question q
        `
    );
    return convertSnakeToCamel.keysToCamel(rows);
}

module.exports = { getAllQuestions };