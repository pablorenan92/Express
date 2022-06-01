const express = require("express");
const app = express(); 

//Rota
app.get("/", function(req,res){ //Rota 
   res.send("Bem vindo a pagina principal"); //res devolve a resposta
});

app.get("/blog/:artigo?", function(req,res){// parametro opcional

    var artigo = req.params.artigo;

    if (artigo) {
        res.send("<h2>Artigo: " + artigo + "</h2>");
    } else {
        res.send("<h1>Bem vindo a pagina blog</h1>");
    }
    
});

app.get("/canal/youtube", function(req,res){

    var canal = req.query["canal"];

    if (canal) {
        res.send(canal); //res devolve a resposta
    } else {
        res.send("Nenhum canal fornecido");
    }
});

app.get("/ola/:nome", function(req,res){ //req informações enviadas pelo usuario
    var nome = req.params.nome;
    res.send("<h1>Oi " + nome +"</h1>"); //res devolve a resposta
});

//Servidor
app.listen(4000, function(erro){
    if (erro) {
        console.log("Ocorreu um erro!");
    } else {
       console.log("Servidor iniciado com sucesso!");
    }
})
