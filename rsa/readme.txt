use test.txt in ./files

node generate.js    //generates rsa key, creates key.txt
node base.js        //base64 encodes text.txt into data.txt
node encrypt.js     //encrypts data.txt into crypt.txt
node decrypt.js     //decrypts crypt.txt into final.txt
node orig.js        //decodes final.txt into orig.txt, that should be the same as test.txt

that base64 step is stupid tho