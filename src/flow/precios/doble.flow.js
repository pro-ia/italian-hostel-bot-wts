import BotWhatsapp from "@bot-whatsapp/bot";
import preciosFlow from "../precios/precios.flow.js";
// import infoTemporada from "../precios/temporada.flow.js";
import informacionFlow from "../informacion/informacion.flow.js";
import derivacionFlow from "../derivacion/derivacion.flow.js";


let menu = `*Tienes mas dudas con las que podamos ayudarte? 🤔*

- *A)* Quiero mas información
- *B)* Volver 👛
- *C)* Quiero saber la disponibilidad 📅 (Hablar con una persona) disponibilidad 
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
    `Habitación privada doble (cama matrimonial o dos camas simples): $45.000.`,
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

      if (ctx.body == "" || ctx.body == "b") {
        return await gotoFlow(preciosFlow);
    }

      if (ctx.body == "C" || ctx.body == "c") {
        return await gotoFlow(derivacionFlow);
      }

      // if (ctx.body == "D" || ctx.body == "d") {
      //   return await gotoFlow(infoTemporada);
      // }

    }
  );
