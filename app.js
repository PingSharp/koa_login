//Project entry file
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World from koa!';
});
 app.listen(3000,()=>{
     console.log("server is listening to port 3000! ")
 });