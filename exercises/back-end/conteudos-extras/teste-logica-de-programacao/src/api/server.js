require("dotenv")

const app = require('./app');

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));