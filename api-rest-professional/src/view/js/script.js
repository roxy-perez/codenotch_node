let url = 'http://localhost:3000/'
let form = document.getElementById('form-proffesional');

/* Recargando la página */
function init() {
    form.reset();
}
//window.onload = init;

/*  Generación de la tabla Listado de Profesionales */
fetch(url)
    .then(res => res.json())
    .then((professionals) => printProffesionals(professionals))
    .catch((err) => console.log(err));

function printProffesionals(professionals) {
    let table = document.querySelector("#data-pro");
    let justProfs = professionals.data;
    let esRetirado = '';

    let outTable = "";
    // Rellenamos las filas con los datos del Response 
    for (let pro of justProfs) {
        if (!pro._isRetired) {
            esRetirado = 'No';
        } else esRetirado = 'Sí';

        outTable += `
           <tr>
              <td>${pro._name}</td>
              <td>${pro._age}</td>
              <td>${pro._weight}</td>
              <td>${pro._height}</td>
              <td>${esRetirado}</td>
              <td>${pro._nationality}</td>
              <td>${pro._oscarsNumber}</td>
              <td>${pro._profession}</td>
            </tr>
        `;
    }

    table.innerHTML = outTable;
}

/*  Guardando datos del Formulario, ya sea nuevo o actualizando */
form.onsubmit = (e) => {
    e.preventDefault();

    let checkRetired = document.querySelector('#isRetired');
    let inputName = document.getElementById('name');
    let formData = $('#form-proffesional').serializeArray();
    let jsonData = {};

    if (checkRetired.checked)
        checkRetired.value = true;

    $.each(formData, function () {
        if (jsonData[this.name]) {
            if (!jsonData[this.name].push) {
                jsonData[this.name] = [jsonData[this.name]];
            }
            jsonData[this.name].push(this.value);
        } else {
            jsonData[this.name] = this.value;
        }
    });

    if (inputName.disabled === false) {

        postData(url + 'professional', jsonData)
            .then(res => {
                if (res.code == 400) {
                    alert("Debe rellenar todos los datos del profesional.");
                } else if (res.code == 409) {
                    alert("El profesional ya existe en la base de datos.");
                } else
                    alert("Datos del profesional guardados correctamente.");
            })
            .catch((err) => console.log(err));

    } else {

        putData(url, jsonData)
            .then(res => {
                if (res.code == 404) {
                    alert("No se encuentra el profesional especificado en la base de datos.");
                } else
                    alert("Datos del profesional modificados correctamente.");
            })
            .then(init())
            .catch((err) => console.log(err));
    }
};

async function postData(url = '', data = {}) {

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": url
        }
    });

    return response.json();
}

async function putData(url = '', data = {}) {

    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": url
        }
    });
    return response.json();
}

/* Búsqueda del profesional y monstrando sus datos en el Form */
async function getProData(url = '') {
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": url
        }
    });

    return response.json();
}

const searchInput = document.getElementById('input-search');
const searchBtn = document.getElementById('btn-search');
searchBtn.addEventListener('click', () => {
    let value = searchInput.value;

    document.getElementById('name').disabled = true;
    url = `${url}professional/?name=${value}`;

    if (value.trim()) {
        value = value.trim().toLowerCase();
        getProData(url)
            .then(res => {
                if (res.code == 404)
                    alert("Debe especificar un nombre existente en la tabla superior.");
                else return res.data;
            })
            .then(data => {
                document.getElementById('name').value = data._name;
                document.getElementById('age').value = data._age;
                document.getElementById('weight').value = data._weight;
                document.getElementById('height').value = data._height;
                if (data._isRetired)
                    document.getElementById('isRetired').checked = true;
                else
                    document.getElementById('isRetired').checked = false;
                document.getElementById('nationality').value = data._nationality;
                document.getElementById('oscarsNumber').value = data._oscarsNumber;
                document.getElementById('profession').value = data._profession;
            })
            .catch((err) => console.log(err));
    }
});

//Limpiar Formulario
const clearBtn = document.getElementById('btn-clear');
clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('name').disabled = false;
    init();
    location.reload();
});


/* Eliminar profesional */
const delBtn = document.getElementById('btn-del');
delBtn.addEventListener('click', (e) => {
    e.preventDefault();

    deleteData(url)
        .then(res => {
            if (res.code == 400) {
                alert("Debe especificar el nombre del profesional.");
            } else if (res.code == 404) {
                alert("El profesional no existe en la base de datos.");
            } else
                alert("Profesional eliminado correctamente.");
        })
        .catch((err) => console.log(err));

});
async function deleteData(url = '') {
    const response = await fetch(url, {
        method: "DELETE",
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": url
        }
    });
    return response.json();
}