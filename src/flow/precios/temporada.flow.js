import BotWhatsapp from "@bot-whatsapp/bot";
import preciosFlow from "../precios/precios.flow.js";
import informacionFlow from "../informacion/informacion.flow.js";
import derivacionFlow from "../derivacion/derivacion.flow.js";

let menu = `Menu temporada
*A)* Quiero mas información
*B)* Disponibilidad
*C)* Volver 👛`;

let infoHabitacion = [
  `Las Tarifas por noche son:`,
  `-Habitación compartida mixta de 4 y 6 pers. (cucheta/litera): $21.000 por persona o $20.000 abonando en efectivo.`,
  `-Habitación privada simple (cama simple): $25.000 o $24.000 en efectivo.`,
  `-Habitación privada doble (cama matrimonial o dos camas simples): $45.000 o $42.000 en efectivo.`,
  `-Habitación privada triple (cama matrimonial mas cama simple): $65.000 o $63.000 en efectivo.`,

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
      if (!["A", "B", "C", "a", "b", "c"].includes(ctx.body)) {
        return await fallBack(`Por favor selecciona una de las opciones
        ${menu}`);
      }

      if (ctx.body == "A" || ctx.body == "a") {
        return await gotoFlow(informacionFlow);
      }

      if (ctx.body == "B" || ctx.body == "b") {
        return await gotoFlow(derivacionFlow);
      }

      if (ctx.body == "C" || ctx.body == "c") {
        return await gotoFlow(preciosFlow);
      }

    }
  );
