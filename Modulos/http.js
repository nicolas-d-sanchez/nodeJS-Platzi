const http = require('http');

http.createServer(router).listen(3000);


function router(req, res){
    console.log('nueva peticion');
    console.log(req.url);

    switch(req.url){
        case '/hola':
            res.write('Hola, qie tal');
            res.end();
            break;

        default:
            res.write('Error 404: no se encuentra la ruta');
            res.end()
    }


//     //respuesta al usuario
//     res.writeHead(201, {'Content-type': 'text/plain'})
//     res.write('hola asi funciona http')
//     res.end();
}

console.log("escuchando en el 3000")