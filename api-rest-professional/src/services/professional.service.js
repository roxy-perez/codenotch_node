let Professional = require('../models/Professional');
const DB = require('../database/db.json');
const { saveToDatabase } = require('../database/utils');

let professional = new Professional("", 0, 0, 0, false, "", 0, "");

const getStart = () => {
    return DB.professionals;
}

const getProfessional = (name) => {

    const proFromJson = DB.professionals.find(
        ({ _name }) => _name.trim().toLowerCase() === name);

        console.log(proFromJson)

    if (!proFromJson) {
        return null;
    }

    return proFromJson;
};

const createProfessional = (data) => {

    /* Verificamos si ya existe el objeto */
    const isAlreadyExist = DB.professionals.find(
        ({ _name }) => _name === data.name)

    if (isAlreadyExist) {
        return;
    }

    if (data.isRetired === undefined ? data.isRetired = false : data.isRetired = true);

    /* Creamos el nuevo objeto Professional */
    professional.name = data.name;
    professional.age = data.age;
    professional.weight = data.weight;
    professional.height = data.height;
    professional.isRetired = data.isRetired;
    professional.nationality = data.nationality;
    professional.oscarsNumber = data.oscarsNumber;
    professional.profession = data.profession;

    /* Guardamos en el Array y hacemos commit al fichero JSON */
    DB.professionals.push(professional);
    saveToDatabase(DB);

    return professional;

};

const updateProfessional = (name, data) => {

    /* Comprabamos si existe el el objeto a modificar */
    const indexForUpdate = DB.professionals.findIndex(
        ({ _name }) => _name.toLowerCase() === name)

    if (indexForUpdate === -1)
        return;

    if (data.isRetired === undefined ? data.isRetired = false : data.isRetired = true);

    professional.name = name;
    professional.age = data.age;
    professional.weight = data.weight;
    professional.height = data.height;
    professional.isRetired = data.isRetired;
    professional.nationality = data.nationality;
    professional.oscarsNumber = data.oscarsNumber;
    professional.profession = data.profession;

    const updatedProf = {
        ...DB.professionals[indexForUpdate],
        ...professional
    };

    DB.professionals[indexForUpdate] = updatedProf;
    saveToDatabase(DB);

    return professional;
};

const deleteProfessional = (name) => {

    /* Comprabamos si existe el el objeto a eliminar */
    const indexForDelete = DB.professionals.findIndex(
        ({ _name }) => _name.toLowerCase() === name)

    if (indexForDelete === -1)
        return -1;

    DB.professionals.splice(indexForDelete, 1);
    saveToDatabase(DB);

    return null;

};

module.exports = {
    getStart,
    getProfessional,
    createProfessional,
    updateProfessional,
    deleteProfessional
};
