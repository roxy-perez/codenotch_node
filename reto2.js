import { writeFile, readFile, unlink } from 'node:fs';

let hero = {
  name: 'Xena',
  surname: 'Warrior Princess',
  age: 32
};

let jHero = JSON.stringify(hero);
let filename = './hero.json';

const data = new Uint8Array(Buffer.from(jHero));

/* Creando y escribiendo el fichero hero.json 
  Eliminamos el fichero si existe previamente en el ELSE. */
function unlinkAndCreate(filename, callback) {
  unlink(filename, (err) => {
    if (err) {
      writeFile(filename, data, (err) => {
        if (err) throw err;
        console.log('¡Fichero guardado!');
        callback();
      });

    } else {
      console.log(`${filename} ha sido borrado correctamente`);
      writeFile(filename, data, (err) => {
        if (err) throw err;
        console.log('¡Fichero eliminado y creado nuevamente!');
        callback();
      });
    }
  });
}

// Le pasamos la Callback para que realice la lectura después de crear el archivo
unlinkAndCreate(filename, 
  () => {
    readFile(filename, (err, data) => {
      console.log(filename)
      if (err) throw err;
      let json = JSON.parse(data.toString());
      console.log(json);
    });
  }
);

