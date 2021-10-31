async function hello(name){
    return new Promise(function(resolve, reject
    ){
        setTimeout(function(){
            console.log("Hola: "+ name);
            resolve(name);
        },1000)    
    })
    
}

async function goodBye(name){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log("Adios: "+ name);        
            resolve(name)
        },1000)
    });
    
}

async function talk(name){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log("Bla Bla Bla");     
            resolve(name)
        },500)
    });
}
async function main(){
    let name = await hello("carlos");
    await talk();
    await talk();
    await talk();
    await talk();
    await talk();
    await talk();
    await goodBye(name);
    console.log("Terminamos")
}

console.log("iniciamos")
main();
