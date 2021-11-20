const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const getAnswerById = async (client, questionID) => {
    /*
    1. answerDB에서 questionID가 일치하는 
        모든 row (id, question_id, user_id, answer)를 가져옴 
    2. user_id를 이용해서 user 테이블의 user_name을 가져옴
    3. user_name이랑 answer를 join해서 response body에 담아야됨
    */
    const { rows } = await client.query(
        `
        SELECT a.*, u.id user_id, u.name user_name
        FROM answer a
            LEFT JOIN "user" u ON u.id = a.user_id
        WHERE question_id = $1
        `,
        [questionID],
    );
    return convertSnakeToCamel.keysToCamel(rows)
}

const addAnswer = async (client, questionID, userID, answer) => {
    // questionID, userName, answer 가지고 answer 테이블에 insert

    const { rows } = await client.query(
        `
        INSERT INTO answer
        (question_id, user_id, answer)
        VALUES
        ($1, $2, $3)
        RETURNING *
        `,
        [questionID, userID, answer],
    );
    return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getAnswerById, addAnswer }