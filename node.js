// server.js
const express = require("express");
const app = express();
app.use(express.json());

let currentCode = gerarCodigo();
let lastUpdate = Date.now();

function gerarCodigo() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({length: 6}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

setInterval(() => {
  currentCode = gerarCodigo();
  lastUpdate = Date.now();
  console.log("Novo código gerado:", currentCode);
}, 3600000); // 1 hora = 3600000 ms

app.get("/codigo", (req, res) => {
  res.json({ codigo: currentCode });
});

app.post("/verificar", (req, res) => {
  const { codigo } = req.body;
  if (codigo === currentCode) {
    res.json({ sucesso: true });
  } else {
    res.json({ sucesso: false, erro: "Código inválido ou expirado" });
  }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));