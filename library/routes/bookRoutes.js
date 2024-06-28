const express = require('express');
const router = express.Router();
const CRUD = require('../services/CRUD');

router.get('/', (req, res) => {
    const obt = CRUD.getAll();
    res.status(200).json({
        message: 'Here is the books list',
         obt 
    });
});
router.get('/:id',
    (req, res) => {
    const crudId = req.params.id;
    const obt = CRUD.getOne(crudId);
    res.status(200).json({
        obt,
        message: 'Here is the books list'

    });
});

router.post('/', (req, res) => {
    const info = req.body;
    CRUD.create(info);
    res.status(201).json({
        message: 'book list updated'
    });
});

router.patch('update-firts-name/:id', (req, res) => {
   const {id} = req.params;
   const {firstname} = req.body;
   CRUD.updateFirtsName(id,firstname)
   res.status(200).json({
    message: 'book update'
   });
});

router.delete('/:id',(req, res) => {
    const { id } = req.params;
    CRUD.remove(id);
    res.status(200).json({
        message: 'book deleted'
    })
})

module.exports = router;
