const fs = require('fs/promises');

let hero = {
    name: 'Xena',
    surname: 'Warrior Princess',
    age: 32
};

let jHero = JSON.stringify(hero);
let filename = './hero.json';

async function writeReadFile() {
    try {
        await fs.writeFile(filename, jHero);
        const file = await fs.readFile(filename, { encoding: 'utf8' });
        console.log(JSON.parse(file));
    } catch (err) {
        console.log(err);
    }
}

writeReadFile();