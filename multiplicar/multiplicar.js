/**
 * Requires
 */
let fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    for (let a = 0; a <= limite; a++) {
        console.log( `${ a } * ${ base } = ${ a * base }`.yellow);  
    }

}

let crearArchivo = (base, limite) => {

    return new Promise( (resolve, reject) => {

        if( !Number(base) ){
            reject('Parametro no válido');
            return;
        }

        let data = '';

        for (let a = 0; a <= limite; a++) {
            data += `${ a } * ${ base } = ${ a * base }\n`;   
        }
        
        fs.writeFile(`tablas/tablamultiplicar${base}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`The file ${ colors.green(`tablamultiplicar${base}.txt`) } has been saved!`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla,
}

