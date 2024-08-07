import BotWhatsapp from "@bot-whatsapp/bot";
import preciosFlow from "./precios/precios.flow.js";
import informacionFlow from "./informacion/informacion.flow.js";
import derivacionFlow from "./derivacion/derivacion.flow.js";

let menu = `Hola! bienvenido al asistente virtual de Italian Hostel gracias por comunicarte con nosotros.
Contanos en que podemos ayudarte 😃
- *A)* Precios 👛
- *B)* Informacion ℹ️
- *C)* Disponibilidad 📅`;

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME).addAnswer(
  menu,
  {
    capture: true,
  },
  async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
    
    if (!["A", "B", "C","a","b","c"].includes(ctx.body)) {
      return await fallBack(`Por favor selecciona una de las opciones
      ${menu}`);
    }

    if (ctx.body == "A" || ctx.body == "a") {
      return await gotoFlow(preciosFlow);
    }

    if (ctx.body == "B" || ctx.body == "b") {
      return await gotoFlow(informacionFlow);
    }

    if (ctx.body == "C" || ctx.body == "c") {
      return await gotoFlow(derivacionFlow);
    }
  }
);
