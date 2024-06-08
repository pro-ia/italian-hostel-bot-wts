import BotWhatsapp from "@bot-whatsapp/bot";
import preciosFlow from "../precios/precios.flow.js";
import infoTemporada from "../precios/temporada.flow.js";
import informacionFlow from "../informacion/informacion.flow.js";
import derivacionFlow from "../derivacion/derivacion.flow.js";


let menu = `*Tienes mas dudas con las que podamos ayudarte? 🤔*

- *A)* Quiero mas información
- *B)* Volver 👛
- *C)* Quiero saber disponibilidad 
- *D)* Precios temporada alta invierno 🏠`;

let infoHabitacion = [
  `Se encuentra en planta alta, cuentan con calefacción por radiadores. La ropa de cama esta incluida exceptuando toallon.`,
  `Los baños se encuentran fuera de la habitación. `,
  menu,
];

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME)
  .addAnswer(
    `*Habitación privada doble:*`,
    {},
    async (ctx, ctxfn) => {
      await ctxfn.flowDynamic(infoHabitacion);
    }
  )
  .addAnswer(
    `Habitación privada doble (cama matrimonial o dos camas simples): $36.000 o $35.000 en efectivo.`,
    {
      capture: true,
    },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
      if (!["A", "B", "C", "D"].includes(ctx.body)) {
        return await fallBack(`Por favor selecciona una de las opciones
        ${menu}`);
      }
      switch (ctx.body) {
        case "A":
          return await gotoFlow(informacionFlow);

        case "B":
          return await gotoFlow(preciosFlow);

        case "C":
          return await gotoFlow(derivacionFlow);

        case "D":
          return await gotoFlow(infoTemporada);
      }
    }
  );
