const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send("API Alo Mundo está rodando 🚀");
});

app.get('/api/alo', (req, res) => {
  res.json({ mensagem: "alô mundo" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
