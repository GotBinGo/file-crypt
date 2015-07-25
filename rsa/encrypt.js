var fs = require('fs');
var NodeRSA = require('node-rsa');
fs.readFile('files/key.txt', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }    
    var key = new NodeRSA(data);
    
    fs.readFile('files/data.txt','binary',function (err,data) {
        //console.log(data);
        if (err) {
            return console.log(err);
        }
        var encrypted = key.encrypt(data, 'base64', 'binary');
        
        fs.writeFile("files/crypt.txt", encrypted, 'binary', function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("crypt file was saved!");
        }); 
        
    });
    
});
