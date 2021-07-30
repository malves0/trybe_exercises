const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
// IMPORTAMOS O EXPRESS E INICIAMOS UMA NOVA APLICAÇÃO
