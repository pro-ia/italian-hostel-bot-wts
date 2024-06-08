import BotWhatsapp from "@bot-whatsapp/bot";
import helloFlow from "../hello.flow.js";
import preciosFlow from "../precios/precios.flow.js";
import informacionFlow from "../informacion/informacion.flow.js";
import derivacionFlow from "../derivacion/derivacion.flow.js";


let menu = `*Tienes mas dudas con las que podamos ayudarte? 🤔*

- *A)* Quiero más información
- *B)* precios
- *C)* Quiero saber disponibilidad
- *D)* Volver al inicio 🏠`;

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
      if (!["A", "B", "C", "D", "E"].includes(ctx.body)) {
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
            return await gotoFlow(helloFlow);
      }
    }
  );
