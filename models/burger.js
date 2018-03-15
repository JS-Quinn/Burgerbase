const orm = require('../config/orm.js');

const burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(response) {
            callback(response);
        });
    },
    insertOne: function(cols, vals, callback) {
        orm.insertOne("burgers", cols, vals, function(response) {
            callback(response);
        })
    },
    updateOne: function(objColsVals, condition, callback) {
        orm.updateOne("burgers", objColsVals, condition, function(response) {
            callback(response);
        });
    }
};

//Export database functions for use in controller
module.exports = burger;