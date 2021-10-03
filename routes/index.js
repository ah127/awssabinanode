const express = require('express');
const { check, body } = require('express-validator');

const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', indexController.getIndex);
router.get('/services', indexController.getServices);
router.get('/research', indexController.getResearch);
router.get('/workprocess', indexController.getWorkprocess);
router.get('/contact', indexController.getContact);
router.post('/contact',[
    check('email').
        isEmail()
        .withMessage('Invalid Email Address Provided'),
    body('fname', 'Name should be at least three character long')
        .isLength({ min: 3 })
],
 indexController.postContact);

module.exports = router;