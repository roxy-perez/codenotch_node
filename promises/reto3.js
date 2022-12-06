const readline = require('readline');
const fs = require('fs/promises');

let hero = {};
let filename = './hero2.json';

function askHero() {
    const qst = new Promise((resolve, reject) => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Escribe el nombre del heroe: ', (name) => {
            rl.question('Escribe su apellido: ', (surname) => {
                rl.question('Escribe su edad: ', (age) => {
                    hero.name = name;
                    hero.surname = surname;
                    hero.age = age;

                    resolve(hero);

                    rl.close();
                });
            });
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

askHero()
    .then(result => { console.log('Resultado promesa: ', result); writeReadFile(result); })
    .catch(err => console.log(err));