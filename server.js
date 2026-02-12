const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/api/alo', (req, res) => {
  res.json({ mensagem: "alô mundo" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
