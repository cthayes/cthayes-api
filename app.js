const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();


let experiences = require('./data/experiences');
let education = require('./data/education');


router.get('/education', function (ctx, next) {
  ctx.body = JSON.stringify(education)
  ctx.response.status = 200;
});

router.get('/experiences', function (ctx, next) {
  ctx.body = JSON.stringify(experiences)
  ctx.response.status = 200;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080);

console.log('Server listening on port 8080');