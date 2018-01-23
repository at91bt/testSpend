var connection = require("./connection");

var model_user = {

    validateEmail : function (email,callback){

        connection.connectToDatabase(function(dbo){
            var myobj = { email };
            dbo.collection("users").findOne(myobj, function(err, res) {
                if (err) throw err;
                if(result) {
                    callback(email);
                }
                else {
                    callback('We allready have this email registered in our system!');
                }
            });
        });

    }
}

module.exports = model_user ;

