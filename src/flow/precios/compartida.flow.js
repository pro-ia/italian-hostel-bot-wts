import BotWhatsapp from "@bot-whatsapp/bot";
import helloFlow from "../hello.flow.js";
import preciosFlow from "../precios/precios.flow.js";
import promoFlow from "../promo/promo.flow.js";
import derivacionFlow from "../derivacion/derivacion.flow.js";

let menu = `*Tienes mas dudas con las que podamos ayudarte? 🤔*

- *A)* Quiero saber la disponibilidad de la habitación individual 📅
- *B)* Promos 🎁
- *C)* Menu precios 👛 
- *D)* Menu principal 🏠`;

let infoHabitacion = [
  `Precios vigentes hasta el 01/11/2024\nTodas con desayuno casero incluido.`,
  `Las habitaciones compartidas se encuentran en planta baja, cuentan con lockers y calefacción por radiadores.\nLa ropa de cama esta incluida exceptuando toallon.\nLos baños se encuentran fuera de la habitación.`,
  menu,
];

export default BotWhatsapp.addKeyword(BotWhatsapp.EVENTS.WELCOME)
  .addAnswer(
    `Habitación compartida mixta de 4 y 6 pers.`,
    {},
    async (ctx, { flowDynamic }) => {
      await flowDynamic(infoHabitacion);
    }
  )
  .addAnswer(
    `(cucheta/litera): $21.000 por persona.`,
    {
      capture: true,
    },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
      if (!["A", "B", "C", "D", "a", "b", "c", "d"].includes(ctx.body)) {
        return await fallBack(`Por favor selecciona una de las opciones
        ${menu}`);
      }

      if (ctx.body == "A" || ctx.body == "a") {
        return await gotoFlow(derivacionFlow);
      }

      if (ctx.body == "B" || ctx.body == "b") {
        return await gotoFlow(promoFlow);
      }

      if (ctx.body == "C" || ctx.body == "c") {
        return await gotoFlow(preciosFlow);
      }

      if (ctx.body == "D" || ctx.body == "d") {
        return await gotoFlow(helloFlow);
      }
    }
  );
