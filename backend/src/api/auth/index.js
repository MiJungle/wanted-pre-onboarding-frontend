const Router = require('koa-router');
const auth = new Router();
const authCtrl = require('./auth.controller');

// auth.get('/register/local', authCtrl.list);

// auth.get('/register/local', authCtrl.localRegister);
auth.post('/register/local', authCtrl.localRegister);
auth.post('/login/local', authCtrl.localLogin);
auth.get('/exists/:key(email|username)/:value', authCtrl.exists);
auth.post('/logout', authCtrl.logout);
auth.get('/check', authCtrl.check);

module.exports = auth;