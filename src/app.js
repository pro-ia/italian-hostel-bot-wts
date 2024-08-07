import BotWhatsapp from "@bot-whatsapp/bot";
import provider from "./provider/index.js";
import flow from "./flow/index.js";
import database from "./database/index.js";

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el nombre del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3688;


// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '..', 'public')));

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'qrIndex.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
//

/**
 * Funcion principal de bot
 */
const main = async () => {
  await BotWhatsapp.createBot({
    database,
    flow: flow,
    provider,
  });

};

main();

