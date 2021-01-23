let express = require('express');
const codeBreaker  = require('./codeBreaker');
app = express();
let Router = express.Router();

Router.get('/generate', codeBreaker.generate);
Router.post('/codebraker/:usercode', codeBreaker.codeBreaker);


app.use(Router);
app.listen(3000,function () {
    console.log("Running on port : 3000")
})