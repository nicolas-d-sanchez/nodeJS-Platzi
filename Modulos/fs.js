const fs = require('fs');

function leer(ruta, callBack){
    fs.readFile(ruta, (err, data)=>{
        console.log(data)
    })
}

function escribir(ruta, contenido,callBack){
    fs.writeFile(ruta,contenido, function(err){
        if (err) {
            console.log('no se ha podido leer', + err)
        }else{
            console.log('se ha escrito correctamente')
        }
    })
}

function borrar(ruta, callBack){
    fs.unlink(ruta, callBack)
}

//borrar(__dirname + '/archivo2.txt', console.log)
// leer(__dirname + '/archivo.txt', console.log)
// escribir(__dirname + '/archivo2.txt', 'console.log')

