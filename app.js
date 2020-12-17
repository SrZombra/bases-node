/**
 * requires
 */

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo =>  console.log(archivo))
            .catch(e => console.log(e));
    break;

    default:
        console.log('Comando no reconocido');
        break;
}

// let parametro = argv2[2];
// let base = parametro.split('=')[1];




