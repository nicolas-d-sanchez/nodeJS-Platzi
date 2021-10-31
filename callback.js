function Asynchronous(name, myCallBack){

    setTimeout(function(){
        console.log("Hola: "+ name);
        myCallBack(name);
    },3000)
    
}

function goodBay(name, otherCallBack){
        setTimeout(function(){
            console.log("Adios: "+ name);
            otherCallBack();
        })
}

// console.log("Iniciando proceso");
// Asynchronous("juan carlos",function(){
//         goodBay("juan carlos",function(){
//             console.log("Terminando Proceso");
//     });
    
// })

console.log("Iniciando proceso");

Asynchronous("juan carlos",function(nombre){
        goodBay(nombre,function(){
            console.log("Terminando Proceso");
    });
    
})