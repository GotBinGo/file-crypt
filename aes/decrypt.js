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

var files = fs.readdirSync("crypt");
if (!fs.existsSync("decrypt"))
	fs.mkdirSync("decrypt");

function dofile(i)
{
    if(i<files.length)
    {
        process.stdout.write(i+" ... ");
        cipher = crypto.createDecipher('aes-256-cbc', key);
        var input = fs.createReadStream('crypt/'+files[i]);
        var output = fs.createWriteStream('decrypt/'+files[i]);
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