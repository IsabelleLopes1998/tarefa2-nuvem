const express = require("express"); // importa o módulo express
const app = express(); // inicia o express

// Rota inicial
app.get("/", function(req, res) {
    res.send("<h1>Bem-vindo ao Catálogo de Filmes!</h1><p>Explore nossa coleção.</p><p><a href='/filmes'>Ver todos os filmes</a></p>");
});

// Rota de filmes
app.get("/filmes", function(req, res) {
    res.send(`
        <h1>Lista de Filmes</h1>
        <ul>
            <li>Filme 1: O Poderoso Chefão</li>
            <li>Filme 2: Interestelar</li>
            <li>Filme 3: Vingadores: Ultimato</li>
            <li>Filme 4: A volta dos que não foram</li>
            <li>Filme 5: Harry Potter</li>
        </ul>
        <p><a href='/'>Voltar para a página inicial</a></p>
    `);
});

// Rota de detalhes do filme com parâmetro
app.get("/filmes/:nome", function(req, res) {
    const nome = req.params.nome;
    res.send(`<h1>Detalhes do Filme: ${nome}</h1><p>Informações sobre o filme ${nome}...</p><p><a href='/filmes'>Ver todos os filmes</a></p>`);
});

// Rota de cadastro de filme com parâmetro opcional
app.get("/cadastro/:nome?", function(req, res) {
    const nome = req.params.nome;
    if (nome) {
        res.send(`<h1>Filme "${nome}" cadastrado com sucesso!</h1><p><a href='/filmes'>Ver lista de filmes</a></p>`);
    } else {
        res.send("<h1>Filme cadastrado!</h1><p><a href='/filmes'>Ver lista de filmes</a></p>");
    }
});


// Inicia o servidor na porta 3000
app.listen(process.env.PORT || 5000, function (erro) {
  if (erro) {
    console.log("Erro ao iniciar o servidor.");
  } else {
    console.log("Servidor iniciado com sucesso.");
  }
});
