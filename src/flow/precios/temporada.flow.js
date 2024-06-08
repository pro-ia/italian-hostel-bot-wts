import BotWhatsapp from "@bot-whatsapp/bot";
import preciosFlow from "../precios/precios.flow.js";
import informacionFlow from "../informacion/informacion.flow.js";
import derivacionFlow from "../derivacion/derivacion.flow.js";


let menu = `Menu temporada
*A)* Quiero mas información
*B)* Disponibilidad
*C)* Volver 👛`;

let infoHabitacion = [
  `Temporada alta invierno`,
  `Los baños se encuentran fuera de la habitación. `,
  menu,
];

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME)
  .addAnswer(`*Temporada alta invierno*`, {}, async (ctx, { flowDynamic }) => {
    await flowDynamic(infoHabitacion);
  })

  .addAnswer(
    `Info`,
    {
      capture: true,
    },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
      if (!["A", "B", "C"].includes(ctx.body)) {
        return await fallBack(`Por favor selecciona una de las opciones
        ${menu}`);
      }
      switch (ctx.body) {
        case "A":
          return await gotoFlow(informacionFlow);

        case "B":
          return await gotoFlow(derivacionFlow);

        case "C":
          return await gotoFlow(preciosFlow);
      }
    }
  );
