const professionalServ = require('../services/professional.service');
let answer;

/* Obtener listado de Profesionales */
const getStart = (req, res) => {
    const allProfessionals = professionalServ.getStart();
    let answer = {
        error: false,
        code: 200,
        message: "Lista de Profesionales",
        data: allProfessionals
    }
    res.send(answer);
}

/*  Obtener profesional  */
const getProfessional = (req, res) => {
    let name = req.query.name;

    if (name === null || name === undefined) {
        answer = {
            error: true,
            code: 404,
            message: "No se ha especificado ningún profesional."
        };

        return answer;
    }

    const professional = professionalServ.getProfessional(name.toLowerCase());

    if (!professional || professional === null) {
        answer = {
            error: true,
            code: 404,
            message: "No existe ningún profesional con esos datos."
        };

        return res.status(404).send(answer);

    } else {
        answer = {
            error: false,
            code: 200,
            message: "Listando datos del profesional",
            data: professional
        };
    }
    return res.send(answer);
};

/* Crear Profesional */
const createProfessional = (req, res) => {
    let data = req.body;

    if (!data.name
        || !data.age
        || !data.weight
        || !data.height
        || !data.nationality
        || !data.profession) {

        answer = {
            error: true,
            code: 400,
            message: "Una o varias de las claves del BODY está/n vacía/s.",
        };

        res.status(400).send(answer);
        return;
    }

    const newProf = professionalServ.createProfessional(data);
    if (!newProf) {
        answer = {
            error: true,
            code: 409,
            message: "Error! El profesional ya existe en la base de datos.",
        };

        res.status(409).send(answer);
        return;
    }

    answer = {
        error: false,
        code: 201,
        message: "Profesional creado correctamente.",
        data: newProf
    };

    res.status(201).send(answer);

};

/* Actualizar Profesional */
const updateProfessional = (req, res) => {
    const queryName = req.query.name;
    console.log(queryName)
    let data = req.body;

    if (!queryName) { return; }

    const updatedProf = professionalServ.updateProfessional(queryName.toLowerCase(), data);
    if (!updatedProf) {
        answer = {
            error: true,
            code: 404,
            message: "El profesional especificado no existe ne la base de datos.",
        };
        res.status(404).send(answer);
        return;
    }
    answer = {
        error: false,
        code: 200,
        message: "El profesional se ha actualizado correctamente.",
        data: updatedProf
    };
    return res.status(200).send(answer);
};

/* Borrar Profesional */
const deleteProfessional = (req, res) => {
    const queryName = req.query.name;
    if (!queryName) {
        answer = {
            error: true,
            code: 400,
            message: "Debe especificar un profesional.",
        };
        res.status(400).send(answer);
        return;
    }

    const deletedProf = professionalServ.deleteProfessional(queryName.toLowerCase());
    if (deletedProf === -1) {
        answer = {
            error: true,
            code: 404,
            message: "El profesional especificado no existe en la base de datos.",
        };
        res.status(404).send(answer);
        return;
    }

    answer = {
        error: false,
        code: 200,
        message: "Profesional borrado correctamente.",
    };

    return res.status(200).send(answer);
};

module.exports = {
    getStart,
    getProfessional,
    createProfessional,
    updateProfessional,
    deleteProfessional
};