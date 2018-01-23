var connection = require("./connection");
var validation = require("./validation");

var model_user = {

    createUser : function (name,email,callback){

        connection.connectToDatabase(function(dbo){
            var myobj = { name, email };
            dbo.collection("users").findOne({email: email}, function(err, res){
                if (err) throw err;
                if (!res) {
                    dbo.collection("users").insertOne(myobj, function(err, res) {
                        if (err) throw err;
                    });
                }else {
                    callback('This is registered email!');
                }
            });

        });

        }
    }

module.exports = model_user ;