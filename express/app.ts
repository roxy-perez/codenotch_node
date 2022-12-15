/* Reto 1 */


import express, { Express, Request, Response } from 'express';
import { Professional } from './Professional';
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let pro = new Professional("", 0, 0, 0, false, "", 0, "");
let name = null;

// GET /profesional. Obtiene el profesional.
app.get('/profesional', (req: express.Request, res: express.Response) => {
  name = req.query.name;
  console.log(name);

  if (name === null || name === 'undefined') {
    res.status(404).send('No se ha especificado ningún usuario.');
  } else
    if (pro.getName() == name) {
      res.status(200).send(`Professional: \n ${JSON.stringify(pro)}`);
    } else
      res.status(404).send('El usuario especificado no existe.');

});

// POST /profesional. Crea un nuevo objeto profesional.
app.post("/profesional", (req: express.Request, res: express.Response) => {
  let data = req.body;
  pro.setName(data.name);
  pro.setAge(data.age);
  pro.setWeight(data.weight);
  pro.setHeight(data.height);
  pro.setIsRetired(data.isRetired);
  pro.setNationality(data.nationality);
  pro.setOscarsNumber(data.oscarsNumber);
  pro.setProfession(data.profession);

  res.status(200).send(pro);

});

// PUT /profesional. Modifica los datos del profesional. 
app.put("/profesional", (req: express.Request, res: express.Response) => {
  let queryName = req.query.name;
  console.log(queryName);

  const { name: nom, age: edad, weight: peso, height: altura, isRetired: jubi,
    nationality: nacion, oscarsNumber: oscars, profession: profesion } = req.body;

  if (queryName != null && pro.getName() == queryName) {
    pro.setName(nom);
    pro.setAge(edad);
    pro.setWeight(peso);
    pro.setHeight(altura);
    pro.setIsRetired(jubi);
    pro.setNationality(nacion);
    pro.setOscarsNumber(oscars);
    pro.setProfession(profesion);

    res.status(200).send(`Usuario modificado correctamente ${JSON.stringify(pro)}`);
  } else res.status(404).send('Usuario no encontrado');

});

// DEL /profesional. Elimina al profesional
app.delete("/profesional", (req: express.Request, res: express.Response) => {
  const { name: nom } = req.body;

  console.log(nom);

  if (nom != null && pro.getName() != null) {

    if (pro.getName() == nom) {
      pro = new Professional("", 0, 0, 0, false, "", 0, "");
      res.status(200).send(`Usuario eliminado correctamente ${JSON.stringify(pro)}`);

    } else res.status(404).send('Usuario no encontrado');
  }

});

app.listen(3000);