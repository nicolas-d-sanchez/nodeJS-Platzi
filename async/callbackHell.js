function hello(name, myCallBack){
    setTimeout(function(){
        console.log("Hola: "+ name);
        myCallBack(name);
    },3000)    
}

function goodBye(name, otherCallBack){
        setTimeout(function(){
            console.log("Adios: "+ name);
            otherCallBack();
        })
}

function talk(callBackTalk){
    setTimeout(function(){
        console.log("Bla Bla Bla");
        callBackTalk();
    },500)
}

function talking(name, veces, callBack){
    if (veces > 0 ) {
        talk(function(){
            talking(name, --veces, callBack);
        })
    }else {
        goodBye(name, callBack)
    }
    
}
console.log("Iniciando proceso");
hello("Carlos", function(name){
    talking(name,5,function(){
        console.log('proceso terminado')
    })
})

// hello("juan carlos",function(nombre){
//         talk( function(){
//             talk( function(){
//                 talk( function(){
//                     goodBay(nombre,function(){
//                         console.log("Terminando Proceso");
//                 })
//             })
//         })
//     });
    
// })

