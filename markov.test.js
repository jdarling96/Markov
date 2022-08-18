const Markov = require('./markov')

describe('Generate text from Markov Maachine', () => {
    let text = 'the cat in the hat is in the hat'
    let mm = new Markov(text) 
    
    test('builds a map of chains of word → possible-next-words.', () => {
        let size = Object.keys(mm.obj).length
        expect(mm.obj).toEqual(expect.any(Object))
        expect(size).toEqual(5)
        
    })

    test('generated text from markov', () => {
        expect(mm.makeText()).toEqual(expect.any(String))

    }) 
})