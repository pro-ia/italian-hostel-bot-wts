import BotWhatsapp from "@bot-whatsapp/bot";
import provider from "./provider/index.js";
import flow from "./flow/index.js";
import database from "./database/index.js";

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
