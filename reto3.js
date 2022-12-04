import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { writeFile, readFile, unlink } from 'node:fs';

let rl = readline.createInterface({ input, output });

rl.question('Escribe el nombre del heroe: ', (name) => {
    rl.question('Escribe su apellido: ', (surname) => {
        rl.question('Escribe su edad: ', (age) => {
            let hero = {};
            hero.name = name;
            hero.surname = surname;
            hero.age = age;

            rl.close(); 

            let jHero = JSON.stringify(hero);
            let data = new Uint8Array(Buffer.from(jHero));
            let filename = './readline.json';

            unlink(filename, (err) => {
                if (err) {
                    writeFile(filename, data, (err) => {
                        if (err) throw err;
                        console.log('¡Fichero guardado!');
                    });

                } else {
                    console.log(`${filename} ha sido borrado correctamente`);
                    writeFile(filename, data, (err) => {
                        if (err) throw err;
                        console.log('¡Fichero eliminado y creado nuevamente!');
                    });
                }
            });

            // Le damos tiempo para que se cree el fichero antes de intentar leerlo
            setTimeout(() => {
                readFile(filename, (err, data) => {
                    if (err) throw err;
                    let json = JSON.parse(data.toString());
                    console.log(json);
                });
            }, 2000);

        });
    });
});
