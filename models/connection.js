var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var model_user = {

connectToDatabase : function (callback) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        callback(dbo);
        //db.close();
    });
}
}

module.exports = model_user;

