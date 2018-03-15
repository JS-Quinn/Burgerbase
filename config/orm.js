const connection = require('connection');

function printQuestionMarks(num) {
    let arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
}
function objToSql(object) {
    let arr = [];
    for (let key in object) {
        let value = object[key];
        if (Object.hasOwnProperty.call(object, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}


const orm = {
    selectAll: function(tableInput, callback) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function(table, cols, vals, callback) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err
            }
            callback(result);
        });
    },
    updateOne: function(table, objColVals, condition, callback) {
        let queryString = "UPDATE " + table;

        queryString += " SET";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(querytring, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
};

//Export the orm object for use in the model
module.exports = orm;