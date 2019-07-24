// manage all routers in this Project
const Router = require('koa-router');
const homeController = require('./controllers/home');
const router = new Router();
const user = new Router({
    prefix: '/user'
});
//Router module exports a function ,this function takes 1 argument(app object)
module.exports = (app) => {
    router.get('/',homeController.home);
    router.get('/benutzerregistrieren',homeController.logUp);
    router.post('/benutzerregistrieren',homeController.logingUp);
    router.get("/anmelden",homeController.logIn);
    router.post("/anmelden",homeController.logingIn);
    router.get("/logout",homeController.logOut);
    router.post("/logout",homeController.logingOut);
    user.get('/:id',homeController.user);
    user.put('/id',homeController.updateUser);
    user.delete('/:id',homeController.deleteUser);
    app.use(router.routes()).use(router.allowedMethods());
    app.use(user.routes()).use(user.allowedMethods());
}