import * as fs from 'fs';

const corpus_filenames = fs.readdirSync('./corpus');
const corpus = corpus_filenames
    .map(filename => `./corpus/${filename}`)
    .map(path => fs.readFileSync(path).toString());

const process_line = (line: string) => {
    const result = line
        .replace(/[_,:;\[\]{}\(\)—“”]/g, '')
        .replace(/[0-9]/g, '')
        .replace(/-/g, ' ')
        .replace(/[\?\!]/g, '.')
        .split(' ')
        .filter(word => !(word.toUpperCase() == word && word.length > 1))
        .join(' ');
    return result;
}

const process_text = (text: string) => {
    const result = text
        .split('\n')
        .map(line => line.trim())
        .map(process_line)
        .filter(line => line.length > 0)
        .join(' ');

    const sentences = result
        .split('.')
        .map(sentence => sentence.trim())
        .map(sentence => sentence.toLocaleLowerCase())
        .map(sentence => sentence.split(' '))
        .map(tokens => tokens.filter(token => token.length !== 0))
        .filter(tokens => tokens.length > 3)
        .map(tokens => tokens.join(' '))

    return sentences;
}

const corpus_tokens: string[][] = corpus.map(process_text);
// const corpus_tokens_flattened = corpus_tokens.flat().flat();

// const vocab_list = [...new Set(corpus_tokens_flattened)]
// const vocab_frequencies_dict = Object.assign({}, ...vocab_list.map(key => ({ [key]: 0 })));
// corpus_tokens_flattened.forEach(token => vocab_frequencies_dict[token] += 1);

// console.log(vocab_frequencies_dict)
// console.log((Object.values(vocab_frequencies_dict) as number[]).filter(n => n >= 5));

// const frequencies = vocab_frequencies_dict;

// console.log(corpus_tokens[0])
// console.log(corpus_tokens.map(tokens => tokens.length).reduce((a, b) => a + b))

for(let i = 0; i < corpus_filenames.length; i++){
    const result = corpus_tokens[i].join('\n');
    fs.writeFileSync(`./corpus-processed/${corpus_filenames[i]}`, result);
}