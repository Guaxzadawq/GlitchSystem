const express = require("express");
const app = express();

let codigoAtual = gerarCodigo();

// Função para gerar um código aleatório
function gerarCodigo() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let codigo = "";
  for (let i = 0; i < 6; i++) {
    codigo += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return codigo;
}

// Atualiza o código a cada 1 hora (3600000 ms)
setInterval(() => {
  codigoAtual = gerarCodigo();
  console.log("Novo código:", codigoAtual);
}, 3600000);

// Rota para exibir o código
app.get("/codigo", (req, res) => {
  res.json({ codigo: codigoAtual });
});

// 🟢 Importante: use a porta do Replit
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
