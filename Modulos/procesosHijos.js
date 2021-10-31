const { exec, spawn } = require('child_process');
const { read } = require('fs');


// exec('dir', (error, stdout, sterr)=>{
//     if (error) {
//         console.log(error);
//         return false;
//     }
//     console.log(stdout);
// })

// exec('node Modulos/consola.js', (error, stdout, sterr)=>{
//     if (error) {
//         console.log(error);
//         return false;
//     }
//     console.log(stdout);
// })

let proceso = spawn('dir') 