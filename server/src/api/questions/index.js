const Router = require('koa-router');

const questions = new Router();
const questionsCtrl = require('./questions.controller');

questions.get('/', questionsCtrl.list)
questions.post('/', questionsCtrl.create)

module.exports = questions;