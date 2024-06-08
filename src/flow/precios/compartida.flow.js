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
  `Precios vigentes hasta el 01/07/2024\nTodas con desayuno casero incluido.`,
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
    `(cucheta/litera): $18.000 por persona o $17.000 abonando en efectivo.`,
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
          return await gotoFlow(derivacionFlow)

        case "B":
          return await gotoFlow(promoFlow)

        case "C":
          return await gotoFlow(preciosFlow);

        case "D":
          return await gotoFlow(helloFlow);
      }
    }
  );
