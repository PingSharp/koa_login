// manage all routers in this Project
const Router = require('koa-router');

const router = new Router();
const user = new Router({
    prefix: '/user'
});
//Router module exports a function ,this function takes 1 argument(app object)
module.exports = (app) => {
    router.get('/',async(ctx,next) =>{
        ctx.body = `<h1>Welcome to home page!</h1></br>
        <a href="http://localhost:3000/anmelden">log in</a>
        </br><a href="http://localhost:3000/benutzerregistrieren">log up</a>`;
    });
    router.get('/benutzerregistrieren',async(ctx,next)=>{
        ctx.response.body = `<form action="http://localhost:3000/benutzerregistrieren" method="POST">
        <label for="EMail">EMail</label>
            <input type="email" name="EMail" value="abc@gmx.de"><br>
            <label for="Benutzername">Benutzername</label>
            <input type="text" name="Benutzername" value="abc"><br>
            <label for="Vorname">Vorname</label>
            <input type="text" name="Vorname" value="Ping"><br>
            <label for="Nachname">Nachname</label>
            <input type="text" name="Nachname" value="Zang"><br>
            <label for="Passwort">Passwort</label>
            <input type="password" name="Passwort" value="123456">
            <input type="submit" value="Submit" id="submitform">
        </form>`
    });
    router.post('/benutzerregistrieren',async(ctx,next)=>{
        const{EMail,Passwort,Vorname} = ctx.request.body;
        console.log(`email: ${EMail};passwords:${Passwort}`);
        ctx.response.body = `<h3>Thank you for log up ${Vorname}!</h3>`;
    });
    router.get("/anmelden",async(ctx,next)=>{
        ctx.response.body = `<form action="http://localhost:3000/anmelden" method="POST">
        <label for="EMail">email:</label>  
          <input type="email" name="EMail" value="abc@gmx.de"><br>
          <label for="Passwort">Password:</label>
          <input type="password" name="Passwort" value="123456">
          <br>
          <input type="submit" value="signIn" id="submitform">
        </form>`;
    });
    router.post("/anmelden",async(ctx,next)=>{
        const{EMail,Passwort} = ctx.request.body;
        console.log(`${EMail},${Passwort}`);
        ctx.response.body = `<h2>welcome back!</h2> `;
    });
    router.get("/logout",async(ctx,next)=>{

    });
    router.post("/logout",async(ctx,next)=>{

    });
    user.get('/:id',async(ctx,next)=>{

    });
    user.put('/id',async(ctx,next)=>{

    });
    user.delete('/:id',async(ctx,next)=>{

    });
    app.use(router.routes()).use(router.allowedMethods());
    app.use(user.routes()).use(user.allowedMethods());
}