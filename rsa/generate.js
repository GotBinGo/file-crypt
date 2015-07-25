var fs = require('fs');
var NodeRSA = require('node-rsa');
var key = new NodeRSA({b:512}).exportKey();
fs.writeFile("files/key.txt", key, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("key file was saved!");
}); 
