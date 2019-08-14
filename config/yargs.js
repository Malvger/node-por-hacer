const descripcion = {
    demand: true,
    alias: 'd'
};
const completado = {
    alias: 'c',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Crear por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra  una tarea', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}