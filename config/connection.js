// Set up the MySQL connection
const mysql = require('mysql');

const connection = mysql.createConnection({
    port: 8080,
    host: localhost,
    user: 'root',
    password: '',
    database: 'burgers_db'
});

// Make the connection 
connection.connect((err)  => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
      }
      console.log(`connected as id ${connection.threadId}`);
    });
    
// Export connection for ORM use.
module.exports = connection;