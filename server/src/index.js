require('dotenv').config(); //dotenv 모듈 불러오는것.

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser')

mongoose.Promise = global.Promise; //mongoDB 연결하는 부분
mongoose.connect(process.env.MONGO_URI).then(
  (response) =>{
    console.log('Successfully connected to mongodb');
  }
).catch(e=> {
  console.error(e);
})

const port = process.env.PORT || 4000;

const { jwtMiddleware } = require('lib/token');

app.use(bodyParser());
app.use(jwtMiddleware); //jwt 미들웨어에 추가
router.use('/api',api.routes()); //api 연결
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`server is listening to port ${port}`)

})

const jwt = require('jsonwebtoken');
const token = jwt.sign({ foo: 'bar' }, 
'secret-key', { expiresIn: '7d' }, 
(err, token) => {
  if(err) {
    console.log(err);
    return;
  }
  // console.log(token)
})

