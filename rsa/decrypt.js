var fs = require('fs');
var NodeRSA = require('node-rsa');
fs.readFile('files/key.txt', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }    
    var key = new NodeRSA(data);    
  
    fs.readFile('files/crypt.txt', 'binary', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var decrypted = key.decrypt(data);
        
        fs.writeFile("files/final.txt", decrypted, 'binary',function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("final file was saved!");
        }); 
        
    });
    
});