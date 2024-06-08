import BotWhatsapp from "@bot-whatsapp/bot";
import provider from "../../provider/index.js";
let menu = `Espere un momento. Está siendo derivado a atención al cliente.`;

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME).addAnswer(
  menu,{},async (ctx, { flowDynamic }) => {
    console.log("message");
    try {
      // Asegúrate de que `sendMessage` sea una función válida en el `provider`
      await provider.sendMessage("+5491134741523", "Holaaa 😈",{});
      console.log("sending message");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }
);
