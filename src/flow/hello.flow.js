import BotWhatsapp from "@bot-whatsapp/bot";
import preciosFlow from "./precios/precios.flow.js";
import informacionFlow from "./informacion/informacion.flow.js";
import derivacionFlow from "./derivacion/derivacion.flow.js";

let menu = `Hola! bienvenido al asistente virtual de Italian Hostel gracias por comunicarte con nosotros. 
Contanos en que podemos ayudarte 😃
- *A)* Precios 👛
- *B)* Informacion ℹ️
- *C)* Disponibilidad 📅`;

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME)
.addAnswer(
  menu,
  {
    //   delay: 3000,
    capture: true,
  },
  async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
    if (!["A", "B", "C"].includes(ctx.body)) {
      return await fallBack(`Por favor selecciona una de las opciones
      ${menu}`);
    }
    switch (ctx.body) {
      case "A":
        return await gotoFlow(preciosFlow);

      case "B":
        return await gotoFlow(informacionFlow);

      case "C":
        return await gotoFlow(derivacionFlow);
    }
  }
);


