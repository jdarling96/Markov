/** Command-line tool to generate Markov text. */

const markov  = require('./markov')
const fs = require('fs')
const process = require('process')
const axios = require('axios');



const generateText = (data) => {
    generate = new markov(data)
    wow = generate.makeText(numWords = 100)
    fs.writeFile('new.txt', wow, 'utf8', function(err) {
        if (err) {
          console.error(`Couldn't write: ${err}`);
          process.exit(1);
        }
      
     else {
      console.log(wow)
    }
});


}

function fromFile(path) {
    fs.readFile(path, 'utf8', (err,data) => {
        if(err){
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        }
        else{
            console.log(data)
            generateText(data)
        }

    })
}

async function fromUrl(path) {
    try {
        let resp = await axios.get(path);
        generateText(resp.data);
      } catch (err) {
        console.error(`Error fetching ${path}: ${err}`);
        process.exit(1);
      }
}







let path = process.argv[3];
let format =  process.argv[2];
if(format === 'file') {
    console.log(process.argv)
    fromFile(path)
}
else if(format === 'url') {
    fromUrl(path)

}
else{
    console.log('specify format')
}