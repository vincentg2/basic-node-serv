// import router
const {Router} = require('express');
const router = Router();


// import controller 
const controller = require('./controllers/controller')
// const listController = require('./controllers/listController');
//! or
// const {getList, createList..} = require('./controllers/listController');

// handle route

router.get('*', controller.home)
// router.get('/lists', listController.getLists);
// router.post('/lists', listController.addList);
// ! or, if destructured

// router.get('lists', getLists)

// !or 

// router.route('/lists')
// .get(listController.getAll)
// .post(listController.create);


// exports router for index.js
module.exports = router;