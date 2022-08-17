/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
    this.obj;
    this.randomKey;
    this.keys;
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    // only select each word once...no duplicate words for the key
    // the value is the the word that follows the key for every word in the list
    let obj = {};

    let removeDups = [...new Set(this.words)];

    removeDups.forEach((word) => {
      obj[word] = [];
    });
    this.words.forEach((word, idx) => {
      if (this.words[idx + 1] === undefined) this.words[idx + 1] = null;
      obj[word].push(this.words[idx + 1]);
    });
    
    this.obj = obj
    this.keys = Object.keys(this.obj)
    this.randomKey = this.keys[Math.floor(Math.random() * this.keys.length)];

    /** return random text from chains */
  }
  makeText(numWords = 10) {
    // TODO
    // num of words to generate from our chain
    /* console.log(this.obj);
    console.log(this.randomKey) */
    let randomKey = this.randomKey
   /*  console.log(randomKey) */
    let text = []
    let i = 0
    

    while (i < numWords) {

      let randVal = this.obj[randomKey][Math.floor(Math.random() * this.obj[randomKey].length)]
      if(randVal !== null){
        randomKey = randVal
        text.push(randVal)
        i++
      }
      else{
        console.log(text)
        return false
        randomKey = this.keys[Math.floor(Math.random() * this.keys.length)];
        randVal = this.obj[randomKey][Math.floor(Math.random() * this.obj[randomKey].length)]
      }
     
       console.log(randVal)
       /* if(randVal === null){
         let keys = Object.keys(this.obj)
         console.log(keys)
         this.randomKey = keys[Math.floor(Math.random() * keys.length)];
         console.log(this.randomKey)
 
       }
       else{
         text.push(randVal)
         
         this.randomKey = randVal
         
         i++
         
 
       } */
     }
     console.log(text)
 
}
}

testing = new MarkovMachine("the cat in the hat is in the hat");
testing.makeText();
