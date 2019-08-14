const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se puedo Guardar', err);
    });
}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    for (let tarea of listadoPorHacer) {
        console.log('=============Por hacer================='.green);
        console.log(tarea.descripcion);
        console.log("Estado: ", tarea.completado);
        console.log('======================================='.green);

    }
    return listadoPorHacer;
};
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
}
const borrar = (descripcion) => {
    cargarDB();
    // let nuevoListado = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    // if (index >= 0) {
    //     listadoPorHace.
    // }
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion != descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}