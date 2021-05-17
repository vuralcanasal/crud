const express = require('express');
const router = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
 router.get('/', services.homeRoutes);

 /**
  *  @description add memory
  *  @method GET /add-memory
  */
 router.get('/add-memory', services.add_memory);
 
 /**
  *  @description update memory
  *  @method GET /update-memory
  */
 router.get('/update-memory', services.update_memory);
 
// API
router.post('/api/memories',controller.create);
router.put('/api/memories/:id',controller.update);
router.get('/api/memories',controller.find);
router.delete('/api/memories/:id',controller.delete);


module.exports = router;