const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const emailTrigger = require("./functions/emailTrigger");
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/a", (req, res) =>{
   var save = JSON.stringify(req.body);
   fs.writeFileSync(`./mySubmits/Dados de ${req.body.nome}.json` , save);
   emailTrigger(req.body);
     console.log(req.body);
     res.status(200);
     res.send(`Informações recebidas! Verifique seu e-mail para saber qual sua expectativa de vida!`);
})

app.listen(8000);

