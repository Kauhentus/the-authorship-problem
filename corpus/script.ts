import fs from 'fs';


// remove lines that start with [123] or |123| footnotes
// const text = fs.readFileSync(`./dekker, satiromastix.txt`).toString();
// const lines = text.split('\n');
// const filtered_lines = lines.filter((line => {
//     return line.replace(/\d+/g, '').slice(0, 2) !== "||";
// })).join('\n');
// fs.writeFileSync('out.txt', filtered_lines);

// change 
// KING
// lorem ipsum
// to KING. lorem ipsum
// const text = fs.readFileSync(`./dekker, the noble spanish soldier.txt`).toString();
// const lines = text.split('\n');
// const filtered_lines = lines.map((line => {
//     const characters_only = line.replace(/[\s0-9]+/g, "").toLocaleUpperCase();
//     if(line == characters_only && line.length > 0){
//         return `${line}.`
//     } else {
//         return line;
//     }
// })).join('\n');
// fs.writeFileSync('out.txt', filtered_lines);

// remove lines with "Page 12" or "View Page"
const text = fs.readFileSync(`./massinger, the bashful lover.txt`).toString();
const lines = text.split('\n');
const filtered_lines = lines.filter(((line: string) => {
    const line_args = line.split(' ');
    return !line.includes("View Page") && 
        !(line_args.length == 2 && line_args[0] == "Page" && /^\d+$/.test(line_args[1]))
})).join('\n');
fs.writeFileSync('out.txt', filtered_lines);
