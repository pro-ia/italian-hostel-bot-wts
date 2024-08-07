import BotWhatsapp from "@bot-whatsapp/bot";
import helloFlow from "../hello.flow.js";
import informacionFlow from "../informacion/informacion.flow.js";
import preciosFlow from "../precios/precios.flow.js";
import promoFlow from "../promo/promo.flow.js";
import derivacionFlow from "../derivacion/derivacion.flow.js";

let menu = `*Tienes mas dudas con las que podamos ayudarte? 🤔*

- *A)* Quiero más información
- *B)* precios
- *C)* Promos
- *D)* Quiero saber disponibilidad
- *E)* Volver al inicio 🏠`;

let infoHabitacion = [
  `En las habitaciones privadas podemos reservar con mascota, consultar disponibilidad.`,
  menu,
];

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME)
.addAnswer(
  infoHabitacion,
  {
    capture: true,
  },
  async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
    if (
      !["A", "B", "C", "D", "E", "a", "b", "c", "d", "e"].includes(ctx.body)
    ) {
      return await fallBack(`Por favor selecciona una de las opciones
      ${menu}`);
    }

    if (ctx.body == "A" || ctx.body == "a") {
      return await gotoFlow(informacionFlow);
    }

    if (ctx.body == "B" || ctx.body == "b") {
      return await gotoFlow(preciosFlow);
    }

    if (ctx.body == "C" || ctx.body == "c") {
      return await gotoFlow(promoFlow);
    }

    if (ctx.body == "D" || ctx.body == "d") {
      return await gotoFlow(derivacionFlow);
    }

    if (ctx.body == "E" || ctx.body == "e") {
      return await gotoFlow(helloFlow);
    }
  }
);
