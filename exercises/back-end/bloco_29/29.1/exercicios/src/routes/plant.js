const router = require('express').Router();

const { Plant } = require('../controllers');

router
  .get('/plants', Plant.getAllPlants)
  .get('/plant/:id'/* : retorna uma planta com o id; */)
  .delete('/plant/:id'/* : deleta uma planta com o id; */)
  .post('/plant/:id sobrescreve a planta com id')
  .post('/plant : cria uma planta nova')
  .get('/sunny/:id : retorna uma planta que precisa de sol com o id');

module.exports = router;