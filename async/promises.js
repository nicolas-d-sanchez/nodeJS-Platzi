function hello(name, myCallBack){
    return new Promise(function(resolve, reject
    ){
        setTimeout(function(){
            console.log("Hola: "+ name);
            resolve(name);
        },1000)    
    })
    
}

function goodBye(name){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log("Adios: "+ name);        
            resolve(name)
        },1000)
    });
    
}

function talk(name){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log("Bla Bla Bla");     
            resolve(name)
        },500)
    });
}

function talk2(name){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log("Bla Bla Bla");     
            reject(name)
        },500)
    });
}



console.log("iniciando el proceso")
hello('Carlos')
    .then(talk)
    .then(talk)
    .then(talk2)
    .then(talk)
    .then(goodBye)   
    .then(()=>{
        console.log("terminando el proceso")
    })
    .catch(error=>{
        console.log(error)
    })