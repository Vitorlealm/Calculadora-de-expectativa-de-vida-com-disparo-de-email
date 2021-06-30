const estimativaDeVida = require("./calculadora");
const nodemailer = require('nodemailer');

function emailTrigger (data){
    const resposta = estimativaDeVida(data);
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
             user: "vitorleal.devmail@gmail.com",
             pass: "devmail21" 
            },
         tls:{
                rejectUnauthorized: false,
            }
            
        });
        transporter.sendMail({
            from: "Vitor Leal <vitorleal.devmail@gmail.com>",
            to: `${data.mail}`,
            subject: "Sua expectativa de vida!",
            text: `Olá ${data.nome}, chegou a sua expectativa de vida com base nas suas respostas ao formulario!\n\n Nossa estimativa é a de que você deve viver aproximadamente ${resposta} anos!\n\n Cuide-se bem! Desejamos uma vida longa a você!`,
        }).then(message =>{
            console.log(message);
        }).catch(err => {
            console.log(err);
        })
}
module.exports = emailTrigger;