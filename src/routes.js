const { Router } = require('express');

const ContactsController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

router.post('/contacts', ContactsController.store);
router.get('/contacts', ContactsController.index);
router.get('/contacts/:id', ContactsController.show);
router.delete('/contacts/:id', ContactsController.delete);
router.put('/contacts/:id', ContactsController.update);

router.post('/categories', CategoryController.store);
router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show);
router.put('/categories/:id', CategoryController.update);
router.delete('/categories/:id', CategoryController.delete);

module.exports = router;
