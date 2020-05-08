const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.LAMBDA_HOSTNAME,
    user: process.env.LAMBDA_USERNAME,
    password: process.env.LAMBDA_PASSWORD,
    database: process.env.LAMBDA_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports.handler = async (event, context, callback) => {
    context.callbackWaitsForEmptyLoop = false;
    let tag = event["params"]["querystring"]["tag"];
    let sql = 'SELECT * FROM `user` WHERE tag = ' + tag;

    const promisePool = pool.promise();
    const [rows] = await promisePool.query(sql);
    const lambdaProxyResponse = {
        statusCode: 200,
        body: JSON.stringify(rows)
    };
    return lambdaProxyResponse;
};
