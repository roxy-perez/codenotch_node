const readline = require('readline');
const fs = require('fs/promises');

let hero = {};
let filename = './hero2.json';

function askHero(question) {
    const qst = new Promise((resolve, reject) => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(question, (answer) => {
            resolve(answer);
            rl.close();
        });
    });

    return qst;
}

async function writeReadFile(hero) {
    try {
        await fs.writeFile(filename, JSON.stringify(hero));
        const file = await fs.readFile(filename, { encoding: 'utf8' });
        console.log('Leyendo fichero: ', JSON.parse(file));
    } catch (err) {
        console.log(err);
    }
}

askHero('Escribe el nombre del heroe: ')
    .then(result => {
        hero.name = result;
        return askHero('Escribe su apellido: ');
    })
    .then(result => {
        hero.surname = result;
        return askHero('Escribe su edad: ');
    })
    .then(result => {
        hero.age = result;
        writeReadFile(hero);
    })
    .catch(err => console.log(err));
