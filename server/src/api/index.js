const Router = require('koa-router');

const api = new Router();
const books = require('./books');
const auth = require('./auth');
const questions = require('./questions');


api.use('/books', books.routes());
api.use('/auth', auth.routes());
api.use('/questions', questions.routes());


module.exports = api;