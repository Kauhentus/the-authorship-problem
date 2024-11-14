import * as fs from 'fs';

const corpus_filenames = fs.readdirSync('./corpus')
    .filter(filename => filename !== "script.ts");
const corpus = corpus_filenames
    .map(filename => `./corpus/${filename}`)
    .map(path => fs.readFileSync(path).toString());

const process_line = (line: string) => {
    let result = line;
    
    // remove stuff between brackets
    let bracket_processed = false;
    if(line.includes('[') && line.includes(']')){
        const fst_bracket_idx = line.indexOf('[');
        const snd_bracket_idx = line.indexOf(']');
        if(fst_bracket_idx < snd_bracket_idx){
            result = result.slice(0, fst_bracket_idx) + result.slice(snd_bracket_idx + 1);
            bracket_processed = true;
        }
    }
    if(!bracket_processed && line.includes('[')){
        const fst_bracket_idx = line.indexOf('[');
        result = result.slice(0, fst_bracket_idx);
        bracket_processed = true;
    }
    if(!bracket_processed && line.includes(']')){
        const snd_bracket_idx = line.indexOf(']');
        result = result.slice(snd_bracket_idx);
        bracket_processed = true;
    }

    // remove symbols and ALL CAPS sentences (not text)
    // and normalize editor-added puncuation
    result = line
        .replace(/[’‘]/g, "'")
        .replace(/[_,:;\[\]{}\(\)—“”&<>$/\\=\+`\^]/g, '')
        .replace(/[0-9]/g, '')
        .replace(/-/g, ' ')
        .replace(/[\?\!]/g, '.')
        .split(' ')
        .filter(word => !(word.toUpperCase() == word && word.length > 1))
        .join(' ');
    return result;
}

const process_text = (text: string) => {
    // remove excess white space
    // and then run process_line()
    const result = text
        .split('\n')
        .map(line => line.trim())
        .map(process_line)
        .filter(line => line.length > 0)
        .join(' ');

    // clean up sentences
    const sentences = result
        .split('.')
        .map(sentence => sentence.trim())
        .map(sentence => sentence.toLocaleLowerCase())
        .map(sentence => sentence.split(' '))
        .map(tokens => tokens.filter(token => token.length !== 0))
        .map(tokens => tokens.filter(word => !(word.length === 1 && [ // remove weird characters
            'b', 'c', 'f',
            'g', 'h', 'j', 'k',
            'p', 'q', 'r',
            'v', 'w', 'x',
            'y', 'z'
        ].includes(word))))
        .filter(tokens => tokens.length > 2) // at least 3 tokens in a sentence
        .map(tokens => tokens.join(' '))

    return sentences;
}

const corpus_tokens: string[][] = corpus.map(process_text);
console.log(corpus_tokens.flat().map(s => s.split(' ')).flat().length)

for(let i = 0; i < corpus_filenames.length; i++){
    const result = corpus_tokens[i].join('\n');
    fs.writeFileSync(`./corpus-processed/${corpus_filenames[i]}`, result);
}