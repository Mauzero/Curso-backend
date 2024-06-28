
module.exports = function (data){
// Using callbacks
var letra, palabra, texto, fallo;
const fs = require('node:fs');
fs.readFile('./libro1.txt','utf-8', (err, lib1) =>{
    letra =  lib1.indexOf(data);
   

fs.readFile('./libro2.txt','utf-8', (err, lib2) =>{
    palabra = lib2.indexOf(data);

fs.readFile('./libro3.txt','utf-8', (err, lib3) =>{
   texto = lib3.indexOf(data);
   
  
        if((letra > -1 )){
           console.log(lib1)
            return lib1;
        }
        else if(palabra > -1){
            console.log(lib2)
           return lib2;
        }
         else if(texto > -1){
            console.log(lib3)
            return lib3;
        }else{
            fallo = "El libro no existe";
            console.log(fallo)
            return fallo;
        }
    });
});
});

// if(pregunta != "id"||"autor"||"titulo"||"categoria"){
       
// }
}// llave general data

// module.exports = function (data, callback) {
//     const fs = require('node:fs');

//     fs.readFile('./libro1.txt', 'utf-8', (err, lib1) => {
//         if (err) {
//             callback(err, null);
//             return;
//         }

//         const letra = lib1.indexOf(data);

//         if (letra > -1) {
//             callback(null, lib1);
//             return;
//         }

//         fs.readFile('./libro2.txt', 'utf-8', (err, lib2) => {
//             if (err) {
//                 callback(err, null);
//                 return;
//             }

//             const palabra = lib2.indexOf(data);

//             if (palabra > -1) {
//                 callback(null, lib2);
//                 return;
//             }

//             fs.readFile('./libro3.txt', 'utf-8', (err, lib3) => {
//                 if (err) {
//                     callback(err, null);
//                     return;
//                 }

//                 const texto = lib3.indexOf(data);

//                 if (texto > -1) {
//                     callback(null, lib3);
//                 } else {
//                     callback("El libro no existe", null);
//                 }
//             });
//         });
//     });
// };
