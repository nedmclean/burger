var connection = require('./connection.js');

// Connect to MySQL database
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});


var orm = {

  
  all: function(cb) {


    connection.query('SELECT * FROM sausages', function (err, result) {
      if (err) throw err;
      cb(result);
    });

  },

  insert: function(sausage_type, cb){

    connection.query('INSERT INTO sausages SET ?', {
      sausage_type: sausage_type,
      devoured: false
    }, function (err, result) {
      if (err) throw err;
      cb(result);
    });

  },

  
  update: function(burgerID, cb){

    // Run MySQL Query
    connection.query('UPDATE sausages SET ? WHERE ?', [{devoured: true}, {id: id}], function (err, result) {
        if (err) throw err;
        cb(result);
      });

  }

};

// Export the ORM object in module.exports.
module.exports = orm;