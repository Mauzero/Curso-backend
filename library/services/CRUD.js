const obt = require('../lib/books');

class crud{
  constructor(){}
    static getAll(){
        const myobt = obt;
        return myobt;
    }

    static getOne(crudId){
        const crud = obt[crudId];
        return crud;
    }

     static create(info){
        const obtBook = (Object.keys(obt)).length + 1;
        obt[obtBook] = info;
        return true;
     }

     static updateFirtsName(crudId, titulo){
        obt[crudId].titulo = titulo;
        return true;
     }

     static remove(crudId){
        delete obt[crudId];
        return true;
     }

  }
module.exports = crud;