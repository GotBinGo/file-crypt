var fs = require("fs");
fs.readFile('files/final.txt','utf-8',function(err, base64){   
    var decoded = new Buffer(base64, 'base64');
    fs.writeFile('files/orig.txt', decoded, function(err) {});
});
