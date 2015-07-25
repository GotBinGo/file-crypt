var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('SECRET> ');
rl.prompt();
rl.on('line', function(line) {    
    key = line;
    dofile(0);
});



var fs = require('fs'),
crypto = require('crypto');
var key = "";

var files = fs.readdirSync("files");
if (!fs.existsSync("crypt"))
	fs.mkdirSync("crypt");

function dofile(i)
{    
    if(i<files.length)
    {
        process.stdout.write(i+" ... ");
        var cipher = crypto.createCipher('aes-256-cbc', key);
        var input = fs.createReadStream('files/'+files[i]);
        var output = fs.createWriteStream('crypt/'+i+"."+files[i].split('.').slice(-1)[0]);
        input.pipe(cipher).pipe(output);
        output.on('finish', function() {
            process.stdout.write("done\r");
            dofile(i+1)
        });
    }
    else
    {
        console.log("done");
        process.exit(0);
    }
}