function otraFuncion(){
    serompe();
}

function serompe(){
    return 3 + z
}

function seRompeA(cb){
    setTimeout(function (){
        try {
            return 3 + z
        } catch (error) {         
            cb(error);
        }
        
    }, 2000)
}

try {
    seRompeA(function(error){
        console.log(error.message)
    });
} catch (error) {
    console.log('se rompio')
    console.error(error.message)
}
