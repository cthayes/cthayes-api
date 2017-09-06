const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const experiences = require('./data/experiences');
const education = require('./data/education');

let port = 8080

if (process.argv.length == 3) {
	port = process.argv[2]
}


router.get('/education', async function (ctx, next) {
  ctx.body = JSON.stringify(education)
  ctx.response.status = 200;
});

router.get('/experiences', async function (ctx, next) {
  ctx.body = JSON.stringify(experiences)
  ctx.response.status = 200;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);
console.log(`Server listening on port ${port}`);