var util = require("util");
var fs = require("fs");
fs.readFile('files/test.txt', function(err, data){    
    var base64 = data.toString('base64');    
    fs.writeFile('files/data.txt', base64,'utf-8', function(err) {});
});
