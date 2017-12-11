var orm = require("../config/orm.js");

var sausage = {
  all: function(cb) {
    orm.all("sausages", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
 create: function(cols, vals, cb) {
    orm.create("sausages", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("sausages", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("sausages", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (sausages_controller.js).
module.exports = sausage;

