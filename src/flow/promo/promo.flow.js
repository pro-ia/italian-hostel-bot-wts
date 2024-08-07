import BotWhatsapp from "@bot-whatsapp/bot";
import helloFlow from "../hello.flow.js";
import preciosFlow from "../precios/precios.flow.js";
import informacionFlow from "../informacion/informacion.flow.js";
import derivacionFlow from "../derivacion/derivacion.flow.js";


let menu = `
*Tienes mas dudas con las que podamos ayudarte? 🤔*

- *A)* Quiero más información
- *B)* precios
- *C)* Quiero saber disponibilidad
- *D)* Volver al inicio 🏠`;

let infoHabitacion = [
  `Promo especial vigente por este invierno! 3 noche abonas con un %15 de descuento del total de tu estadia.`,
  menu,
];

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME)

  .addAnswer(
    infoHabitacion,
    {
      capture: true,
    },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
      if (!["A", "B", "C", "D", "E", "a", "b", "c", "d", "e"].includes(ctx.body)) {
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
        return await gotoFlow(derivacionFlow);
      }

      if (ctx.body == "D" || ctx.body == "d") {
        return await gotoFlow(helloFlow);
      }
    }
  );
